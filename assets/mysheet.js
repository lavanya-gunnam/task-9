function getData(status){
// alert("hello");
    var orignalData = JSON.parse(data);

    console.log(orignalData,"originalData")
  //  filter condition
    var actualData = orignalData.filter(a=>{if(a.status==status)return a})
    console.log(actualData,"a actualData")
  //  conditional operator
    var btn = (status == 'available' ? 'Buy Now' : (status == 'upcoming' ? 'Coming Soon' : 'Out Of Stock'));

    var add = '<div class="swiper mySwiper"><div class="swiper-wrapper ">'
    
    // Loop through the filtered data to build HTML cards for each item.
    for(let i=0; i<actualData.length; i++ )
    {
    
      add += '<div class=" swiper-slide card" style="width: 20rem; float : left; margin:1px; text-align: center">'
      add += '<img src="'+actualData[i].image+'" class="" alt="..." >'
      add += '<div class="card-body" >'
      add += '<h5 class="card-title">'+actualData[i].imagename+'</h5>'
      add += '<p class="card-text">'+actualData[i].price+'</p>'
      add += '<p class="card-text" style="color:blue">'+actualData[i].actulprice+'</p>'
          
       // star rating 
            add +='<style>'
             add+='.checked {'
             add+='color: orange;}'
             add +='</style>'
           for(let j=0; j<5; j++)
            {
        let starValue =actualData[i].starratingValue*1>j?" checked":''
             add+=' <span class="fa fa-star'+starValue+'"></span>'
            }
          
     // button
            add +='<div>'
       add += '<a href="#" class="btn btn-warning"><p class="card-text" style="border-radius: 20px;">'+btn+'</p></a>'
        add += '</div>'
      add += '</div>'
        add+='</div>'
    }
  
   add += '</div>'
    add += '<div class="swiper-button-prev"></div>'
 add += '<div class="swiper-button-next"></div>'
    add += '</div>'
     
     
    document.getElementById("products").innerHTML=add;
    // call the change swiper
    changeSwiper()
   
  }



  