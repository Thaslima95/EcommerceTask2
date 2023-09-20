const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const bcrypt=require("bcrypt");

app.use(express.json()) 


app.use(cors())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"aafiya.",
    database:"ecommerce"

})

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const queryfunc=(sql,values)=>{
db.query(sql,[values],(err,data)=>{
    if(err) throw err;
    return (data)
})
}
const queryfunc2 = (sql, values) => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
const queryfunc3=(sql)=>{
 return new Promise((resolve, reject) => {
        db.query(sql,  (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

app.post('/adduser',(req,res)=>{
    const name=req.body.name;
    console.log(name)
    const email=req.body.email;
    const password=req.body.password;
    console.log(password)
    //  const salt=await bcrypt.genSalt(10);
    // const hashedpassword=await bcrypt.hash(password,salt)
    const sql= "INSERT INTO users (user_name,user_email,user_password) VALUES ?";
    const value=[[name,email,password]];
    const result=queryfunc(sql,value)
    return res.json(result)
})

app.post("/login",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const sql='SELECT user_id,user_name,user_password from users where user_email=? and user_password=?';
    const result=await queryfunc2(sql,[email,password])
    console.log(result)
    if(result.length>0)
    {
        return res.json(result)
    }
    else{
        res.json("user doesn't exists")
    }
})


app.post('/addproduct',(req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const image=req.body.image;
    const quantity=req.body.quantity;
    const category=req.body.category;
    
    const sql="INSERT INTO products (product_title,product_description,product_price,product_image,inventory_quantity,category) VALUES ?";
    const value=[[title,description,price,image,quantity,category]];
    const result=queryfunc(sql,value)
    return res.json(result)
})

app.get("/allproducts",async(req,res)=>{
    const sql="SELECT * FROM products";
    const result= await queryfunc3(sql)
    console.log(result)
    return res.json(result)
})

app.get("/typeofcategory",async(req,res)=>{
    console.log("category")
    const sql="Select Distinct(category) from products where is_deleted=0";
    const result=await queryfunc3(sql)
    return res.json(result)

})

app.get("/getproducts/:limit",async(req,res)=>{
    const limitval=req.params.limit;
    const sql=`Select product_id,product_title,product_price,product_description,product_image,category from products limit ${limitval}`
     const result=await queryfunc3(sql)
    return res.json(result)
})
app.get("/singleproduct/:id",async(req,res)=>{
    const id=req.params.id;
    console.log(id)
    const sql="SELECT * from products WHERE product_id=? and is_deleted=0";
    const result=await queryfunc2(sql,[id])
    return res.json(result)

})

app.get("/category/:category",async(req,res)=>{
    const category=req.params.category;
    const sql="SELECT * from products WHERE category=? and is_deleted=0";

    const result=await queryfunc2(sql,[category])
    return res.json(result)

})



app.post("/addtocart",(req,res)=>{
    const productid=req.body.productid;
    const quantity=req.body.quantity;
    const userid=req.body.user_id;
    
    const sql=`SELECT product_price,inventory_quantity from products where product_id =${productid} AND inventory_quantity >0 and is_deleted=0`
    db.query(sql,(err,data)=>{
        if(err) throw err;
        console.log(data)
        if(data.length >0)
        {
            
            const value=[productid,quantity,userid,data[0].product_price*quantity]
            const sql=`INSERT INTO cart (product_id,quantity,user_id,cart_total) VALUES (?,?,?,?)`
             db.query(sql,[productid,quantity,userid,data[0].product_price*quantity],(err,data)=>{
                if(err) throw err;
                const sql=`UPDATE Products SET inventory_quantity=inventory_quantity- ? where product_id=?`
                db.query(sql,[quantity,productid],(err,data)=>{
                    if(err) throw err;
                    else{
                        const sql=`select product_price,product_title ,quantity from products as p inner join cart as c on p.product_id=c.product_id where c.user_id=${userid} and c.is_deleted=0`
                if(err) throw err;
                return res.json(data)
                    }
                })
             })
        }
    })
})


app.patch("/updatecart",(req,res)=>{
     console.log(req.body.product_id)
    const productid=req.body.product_id;
    const userid=req.body.user_id;
    const quantity=req.body.quantity;
    const sql=`select product_price,quantity from cart as c inner join products as p on c.product_id=p.product_id where c.product_id=${productid} and c.user_id=${userid} and c.is_deleted=0`
    db.query(sql,(err,data)=>{
        if(err) throw err;
        if(data.length>0)
        {
            
            const oldquantity=data[0].quantity;
            if(oldquantity<quantity)
            {
                const diff=oldquantity-quantity;
                const sql=`UPDATE cart set quantity=? ,cart_total=? where product_id=? and user_id=?`
                 db.query(sql,[quantity,data[0].product_price*quantity,productid,userid],(err,data)=>{
                if(err) throw err;
                const sql=`UPDATE Products SET inventory_quantity=inventory_quantity+ ? where product_id=?`
                db.query(sql,[diff,productid],(err,data)=>{
                    if(err) throw err;
                    return res.json("cart updated")
                })
            })
            }
            else{
                console.log(data[0].quantity+"quantity")
                const diff=quantity-oldquantity;
                const sql1=`SELECT product_id,product_price from products where inventory_quantity > 0 and product_id=${productid}`;
                db.query(sql1,(err,data)=>{
                    if(data.length>0)
                    {
                    const sql=`UPDATE cart set quantity=? ,cart_total=? where product_id=? and user_id=?`
                 db.query(sql,[quantity,data[0].product_price*quantity,productid,userid],(err,data)=>{
                if(err) throw err;
                const sql=`UPDATE Products SET inventory_quantity=inventory_quantity- ? where product_id=?`
                db.query(sql,[diff,productid],(err,data)=>{
                    if(err) throw err;
                    return res.json("cart updated")
                })
            })
                    }
                })
             
           
        }
    }})
})

app.patch("/removecart/:productid",(req,res)=>{
    const productid=req.params.productid;
    const userid=req.body.user_id;
    const quantity=req.body.quantity;
     const sql=`DELETE FROM cart where product_id=? and user_id=?`
     db.query(sql,[productid,userid],(err,data)=>{
if(err) throw err;
     const sql=`UPDATE products SET inventory_quantity=inventory_quantity+? where product_id=?`
     db.query(sql,[quantity,productid],(err,data)=>{
        if(err) throw err;
        return res.json("cart removed")
     })
     })
})

app.get('/cartdetails/:user_id',async(req,res)=>{
    const userid=req.params.user_id;
    console.log(userid)
    const sql=`select c.product_id,product_price,product_title ,quantity,cart_total,product_image from products as p inner join cart as c on p.product_id=c.product_id where c.user_id=? and c.is_deleted=0`
     
     const result=await queryfunc2(sql,[userid])
    return res.json(result)
})

app.get('/carttotal/:user_id',async(req,res)=>{
    const userid=req.params.user_id;
    console.log(userid)
    const sql=`select sum(cart_total) as total_price,user_id from cart  where user_id=? and is_deleted=0 group by user_id` 
    const result=await queryfunc2(sql,[userid])
    return res.json(result)
})

app.post('/proceedtocheckout/:user_id',(req,res)=>{
    const values=[];
    const userid=req.params.user_id;
    
    const sql=`SELECT sum(cart_total)as total,product_id from cart where user_id=${userid} and is_deleted=0 group by product_id`
    db.query(sql,(err,data)=>{
        if(err) throw err;
        if(data.length>0)
        {
           data.map((e)=>values.push(['order placed','COD',e.product_id,e.total,userid,0]))
           const sql=`INSERT INTO orders (order_status,order_type,product_id,total_price,user_id,is_deleted) VALUES ?`;
           db.query(sql,[values],(err,data)=>{
            if(err) throw err;
            const sql1=`UPDATE cart SET is_deleted=1 where user_id=?`;
            db.query(sql1,[userid],(err,datas)=>{
                if(err) throw err;
                return res.json("order placed")
            })
           })
        }
    })
})

app.get('/products/:producttitle',async(req,res)=>{
    const producttitle=req.params.producttitle;
    console.log(producttitle)
    const sql=`Select product_title,product_image,product_price from products where product_title Like '%?%'`;
    const result=await queryfunc2(sql,[producttitle])
    return res.json(result)

})





app.get('/orders/:userid',async(req,res)=>{
    const userid=req.params.userid;
    const sql=`select product_title,product_price,order_type,order_status,o.created_at,o.order_booking_date from orders as o inner join products as p on o.product_id=p.product_id where user_id=? and o.is_deleted=0`;
     const result=await queryfunc2(sql,[userid])
    return res.json(result)
})


app.get('/ordersbydate/:userid/:startdate/:enddate',(req,res)=>{
    const userid=req.params.userid;
    const startdate=req.params.startdate;
    const enddate=req.params.enddate;
    

})
app.get('/filter/:price1/:price2',async(req,res)=>{
    const price1=req.params.price1;
    const price2=req.params.price2;
    const sql=`SELECT PRODUCT_TITLE,PRODUCT_PRICE,PRODUCT_IMAGE,PRODUCT_DESCRIPTION,PRODUCT_ID FROM PRODUCTS WHERE PRODUCT_PRICE BETWEEN ? AND ?`;
     const result=await queryfunc2(sql,[price1,price2])
    return res.json(result)
})

app.get('/getsaveforlateritems/:userid',async(req,res)=>{
    const userid=req.params.userid;
    const sql=`select product_title,p.product_id,product_image,product_price,user_id from products as p inner join saveforlater as s on p.product_id=s.product_id where user_id=?`
   
     const result=await queryfunc2(sql,[userid])
    return res.json(result)
})

app.post('/saveforlater',(req,res)=>{
    console.log(req.body.product_id)
    const productid=req.body.product_id;
    const userid=req.body.user_id;
    const quantity=req.body.quantity;
    
    const sql="INSERT INTO saveforlater (product_id,user_id) VALUES ?";
    const value=[[productid,userid]];
    db.query(sql,[value],(err,data)=>{
        if(err) throw err;
         const sql1=`UPDATE cart SET is_deleted=1 where user_id=? and product_id=?`;
            db.query(sql1,[userid,productid],(err,datas)=>{
                if(err) throw err;
                const sql="UPDATE products SET inventory_quantity=inventory_quantity+ ? where product_id=?"
                db.query(sql,[quantity,productid],(err,data)=>{
                    if(err) throw err;
                    return res.json("added to save for later")
                })
            })
    })
    
})




app.listen(8083,()=>{
    console.log("listening backend")
})