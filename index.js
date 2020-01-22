import Client from "./client";

uploadImage = () => {
  const r = new XMLHttpRequest();
  const d = new FormData();

  // Input image from INPUT FORM UPLOAD
  const e = document.getElementsByClassName("input-image")[0].files[0];

  d.append("image", e);
  
  // END POINT
  r.open("POST", "https://api.imgur.com/3/image/");

  //Replace CLIENT ID with your CLIENT ACCOUNT ID
  r.setRequestHeader("Authorization", `Client-ID ${Client.ID}`);
  
  r.onreadystatechange = () => {
    if (r.status === 200 && r.readyState === 4) {
      let res = JSON.parse(r.responseText);
      u = `https://i.imgur.com/${res.data.id}.png`;
      
      // res.data.link contains the link of the uploaded image
      console.log(res.data.link);
    }
  };
};

export default uploadImage;
