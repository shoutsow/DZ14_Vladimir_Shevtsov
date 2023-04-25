let ht = document.getElementsByTagName("html")[0];
let lang = document.createAttribute("lang");
lang.value = "en";
ht.setAttributeNode(lang);

let meta1 = document.createElement("meta");
let charset = document.createAttribute("charset");
charset.value = "UTF-8";
meta1.setAttributeNode(charset);

let meta2 = document.createElement("meta");
let httpequiv = document.createAttribute("http-equiv");
let content = document.createAttribute("content");
httpequiv.value = "X-UA-Compatible";
content.value = "IE=edge";
meta2.setAttributeNode(httpequiv);
meta2.setAttributeNode(content);

let meta3 = document.createElement("meta");
let namea = document.createAttribute("name");
let content2 = document.createAttribute("content");
namea.value = "viewport";
content2.value = "width=device-width, initial-scale=1.0";
meta3.setAttributeNode(namea);
meta3.setAttributeNode(content2);

let style = document.createElement("style");
style.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat&family=Open+Sans&display=swap');
/* {
margin: 0;
padding: 0;
}*/
.container {
    position: relative;
    width: 1280px;
    height: 880px;
    background: #FFFFFF;
    border: 1px solid #E8E9ED;
    margin: auto;
    margin-top: 240px;
    margin-bottom: 240px;
}
h1 {
    font-size: 1em;
    font-weight: normal;
}
.h1 {
    font-family: 'Arvo', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    display: inline;
    text-align: center;
    color: #212121;
}
.p {
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 26px;
    display: inline;
    text-align: center;
    color: #9FA3A7;
}
.freeframe {
    position: absolute;
    width: 401px;
    height: 480px;
    left: 240px;
    bottom: 139px;
    background-color: #FFFFFF;
}
.free {
    position: absolute;
    width: 400px;
    height: 479px;
    left: 0.5px;
    top: 0.5px;
    border: 1px solid #E8E9ED;
    border-radius: 8px 0px 0px 8px;
}
.fp1 {
    position: absolute;
    width: 107px;
    height: 15px;
    left: 147px;
    top: 81px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 2.4px;
    color: #9FA3A7;
}
.fp2 {
    position: absolute;
    width: 210px;
    height: 92px;
    left: 95px;
    top: 115px;
    font-family: 'Arvo';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #212121;
}
.fp3 {
    position: absolute;
    width: 210px;
    height: 44px;
    left: 95px;
    top: 232px;
    font-family: 'Open Sans';
    font-size: 12px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #9FA3A7;
}
.fb {
    position: absolute;
    width: 147px;
    height: 46px;
    left: 126px;
    bottom: 92px;
    background-color: #FFFFFF;
    border: 3px solid #FFC80A;
    border-radius: 23px;
}
.fbtn {
    position: absolute;
    width: 100px;
    height: 15px;
    left: 24.5px;
    bottom: 0.5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 2.4px;
    color: #212121;
}
.stuframe {
    position: absolute;
    width: 400px;
    height: 480px;
    right: 240px;
    bottom: 139px;
}
.stu {
    position: absolute;
    width: 400px;
    height: 479px;
    left: 0.5px;
    top: 0.5px;
    background: #8F75BE;
    border: 1px solid #E8E9ED;
    border-radius: 0px 8px 8px 0px;
}
.sp1 {
    position: absolute;
    width: 61px;
    height: 15px;
    left: 171.5px;
    top: 83px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 2.4px;
    color: #FFC80A;
}
.sp2 {
    position: absolute;
    width: 210px;
    height: 92px;
    left: 94px;
    top: 117px;
    font-family: 'Arvo';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
.sp3 {
    position: absolute;
    width: 210px;
    height: 44px;
    left: 94px;
    top: 234px;
    font-family: 'Open Sans';
    font-size: 12px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
.sb {
    position: absolute;
    width: 147px;
    height: 46px;
    left: 126px;
    bottom: 92px;
    background-color: #8F75BE;
    border: 3px solid #FFC80A;
    border-radius: 23px;
}
.sbtn {
    position: absolute;
    width: 100px;
    height: 15px;
    left: 24.5px;
    bottom: 0.5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 2.4px;
    color: #FFFFFF;
}`

let title = document.createElement("title");
title.innerText = 'DZ14';

let head = document.getElementsByTagName("head")[0];

head.appendChild(meta1);
head.appendChild(meta2);
head.appendChild(meta3);
head.appendChild(title);
head.appendChild(style);

let bodycontent = document.createElement("div");
let divclass = document.createAttribute("class");
divclass.value = "container";
bodycontent.setAttributeNode(divclass);
bodycontent.innerHTML = `<div class="h1">
<h1>Choose Your Option</h1>
</div>
<div class="p">
<p>But I must explain to you how all this mistaken idea of denouncing </p>
</div>
<div class="freeframe">
<div class="free">
    <div class="fp1">
        <p>FREELANCER</p>
    </div>
    <div class="fp2">
        <p>Initially designed to</p>
    </div>
    <div class="fp3">
        <p>But I must explain to you how all this mistaken idea of denouncing</p>
    </div>
    <button class="fb"><p class="fbtn">START HERE</p></button>
</div>
</div>
<div class="stuframe">
<div class="stu">
    <div class="sp1">
        <p>STUDIO</p>
    </div>
    <div class="sp2">
        <p>Initially designed to</p>
    </div>
    <div class="sp3">
        <p>But I must explain to you how all this mistaken idea of denouncing</p>
    </div>
    <button class="sb"><p class="sbtn">START HERE</p></button>
</div>
</div>`

let body = document.getElementsByTagName("body")[0];
body.prepend(bodycontent);