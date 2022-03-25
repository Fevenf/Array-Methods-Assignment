let photoslideshow = {
    photolist: ["pic1", "pic2", "pic3"],
    currentphotoindex: 0,
    nextphoto: function () {
      if (this.currentphotoindex < this.photolist.length - 1) {
        return this.photolist[(this.currentphotoindex += 1)];
      } else {
        return (
          this.photolist[(this.currentphotoindex = 0)],
          console.log("End of slideshow.")
        );
      }
    },
    prevphoto: function () {
      if (this.currentphotoindex <= 0) {
        return this.photolist[
          (this.currentphotoindex = this.photolist.length - 1)
        ];
      } else {
        return (
          this.photolist[(this.currentphotoindex -= 1)],
          console.log("End of slideshow.")
        );
      }
    },
    getcurrentphoto: function () {
      return this.photolist[this.currentphotoindex];
    },
  };
  console.log(photoslideshow);