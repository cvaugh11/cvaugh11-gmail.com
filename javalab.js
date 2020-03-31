
var slideShow=
{
    photoList: ['Carlton.jpg', 'Denard.jpg', 'Vaughn.jpg','Junior.jpg'],
    
    currentPhotoIndex: 0, 

    getCurrentPhoto: function()
    {
        console.log("The current slide is:" + this.photoList[this.currentPhotoIndex]);
    },

    nextPhoto:function()
    {
        if(this.currentPhotoIndex < (this.photoList.length-1))
        {
        this.currentPhotoIndex++;
        console.log("The next slide is: " + this.photoList[this.currentPhotoIndex]);
        }else
        console.log("End of slideshow");
    },

    previousPhoto:function()
    {
        if(this.currentPhotoIndex>0)
        {
        this.currentPhotoIndex--;
        console.log("Previous photo is: "+this.photoList[this.currentPhotoIndex]);
        }else
        console.log("Start of slideshow");
    }
}



slideShow.previousPhoto();
slideShow.getCurrentPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
