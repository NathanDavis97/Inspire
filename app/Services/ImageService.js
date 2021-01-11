import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and save to the State
let url = 'images/'

class ImageService {
  async getBackGround() {
    let res = await api.get(url)
    ProxyState.images = res.data.url
    console.log(ProxyState.images);
    let bg = ProxyState.images
    document.body.style.backgroundImage = "url(" + bg + ")"

  }
}

const imageService = new ImageService();
export default imageService;