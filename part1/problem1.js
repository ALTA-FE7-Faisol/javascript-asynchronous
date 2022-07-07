function jajanBoba (uang, callback )  {
    let uangSisa = uang
    setTimeout (function()  {
    let hargaBoba=5000;
    uangSisa -= hargaBoba;
    if (uangSisa < 0) {
        console.log("Maaf uang kamu belum cukup untuk membeli jajan boba");
    } else {
        console.log("Kamu jajan boba dengan harga Rp.",hargaBoba);
        console.log("Sisa uang kamu Rp.",uangSisa);
    }
    }, 5000)
    setTimeout(() => {
        callback(uangSisa)
    }, 9000);
}
    
function jajanSeblak (uang)  {
    let hargaSeblak=8000;
    let uangSisa = uang-hargaSeblak;
    if (uangSisa < 0) {
        console.log("Maaf uang kamu belum cukup untuk membeli jajan seblak");
        console.log("Sisa uang kamu sebesar Rp.",uang);
    } else {
        console.log("Kamu jajan seblak dengan harga Rp.",hargaSeblak);
        console.log("Sisa uang kamu Rp.",uangSisa);
    }
}
    
    
jajanBoba(20000, jajanSeblak)
// jajanBoba(10000, jajanSeblak)