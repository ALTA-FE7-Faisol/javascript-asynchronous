function jajanBoba (uang, callback )  {
    let uangSisa = uang
    setTimeout (function()  {
    uangSisa -= 5000
    if (uangSisa < 0) {
        console.log("Maaf uang kamu belum cukup untuk membeli jajan boba");
    } else {
        console.log("Kamu jajan boba dengan harga Rp. 5000 ");
        console.log("Sisa uang kamu Rp.", uangSisa);
    }
    }, 5000)
    setTimeout(() => {
        callback(uangSisa)
    }, 9000);
}
    
function jajanSeblak (uang)  {
    let uangSisa = uang-8000
    if (uangSisa < 0) {
        console.log("Maaf uang kamu belum cukup untuk membeli jajan seblak");
        console.log("Sisa uang kamu sebesar Rp.", uang);
    } else {
        console.log("Kamu jajan seblak dengan harga Rp. 8000");
        console.log("Sisa uang kamu Rp.", uangSisa);
    }
}
    
    
jajanBoba(20000, jajanSeblak)
// jajanBoba(10000, jajanSeblak)