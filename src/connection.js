
<html>

<head>

<script>

var mongoClient  = require("mongodb").MongoClient;

var conStr = "mongodb://127.0.0.1:27017";

mongoClient.connect(conStr, (err, clientObject)=>{
   if(!err) {
     console.log(`Connected Successfully..`);
   } else {
      console.log(err);
   }
});
</script>
</head>
</html>

