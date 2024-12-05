import axios from 'axios';
import imageType from 'image-type';

export const checkValidImage = async (url: string) => {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const type = imageType(response.data);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};