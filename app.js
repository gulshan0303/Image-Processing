const jimp=require('jimp');

jimp.read("pic.jpeg",(err,pic)=>{
    if(err)throw err;

    pic
      .resize(256,256)
      .quality(60)
      .greyscale()
      .write("Modified.jpg");
});