require("dotenv").config();
exports.PORT = 3001;
exports.MONGODB_URI = "mongodb+srv://roshanrn:jobak12345678@servicemarketplaceclust.5uw12ob.mongodb.net/?retryWrites=true&w=majority&appName=servicemarketplacecluster";
exports.NODE_ENV = "development";

exports.JWT_SECRET = "mysecretkey";
exports.ORIGIN = "http://10.0.2.2:3000";

exports.FAST2SMS = process.env.FAST2SMS;
exports.ADMIN_PHONE = +94774469306;