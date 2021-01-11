
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import imageService from "../Services/ImageService.js";



export default class ImageController {
  constructor() {
    this.getBackGround()
  }
  getBackGround() {
    try {
      imageService.getBackGround()
    } catch (error) {
      console.error(error)
    }
  }
}