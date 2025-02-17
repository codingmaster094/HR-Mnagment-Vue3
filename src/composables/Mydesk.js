import { ref } from "vue";
import axios from "axios";
import { BaseURL } from '../../env.js';
import Cookies from "js-cookie";

export default function useDesk() {
    let baseURL = BaseURL + "desk";
    const token = Cookies.get('fmljwt')
    let UserData = ref([]);
    let ErrorMessage = ref(null);
    let statusCode = ref(null);

    const GetClockIN_out = async() => {
        UserData.value = [];
        ErrorMessage.value = null;
        statusCode.value = null;
        try {
            const res = await axios.post(baseURL + '/get/userIN/desk' , {} ,{ headers: { "Authorization": `Bearer ${token}` } });
            console.log('res', res)
            if(res.status == 200){
              UserData.value = res.data.Data
            }
          } catch (err) {
            ErrorMessage.value = err;
          }
    }

return{
    UserData,
    ErrorMessage,
    statusCode,
    GetClockIN_out
}
}