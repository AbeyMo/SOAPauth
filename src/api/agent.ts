import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://isapi.mekashron.com/soapclient/soapclient.php?URL=http://isapi.icu-tech.com/icutech-test.dll/wsdl/IICUTech';


const responseBody =<T> (response: AxiosResponse<T>) => response.data;



const requests ={
    get:<T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body:{}) => axios.post<T>(url, body).then(responseBody),
    put:  <T> (url: string, body:{}) => axios.put<T>(url, body).then(responseBody),
    delete:  <T> (url: string) => axios.delete<T>(url).then(responseBody),
    postf: <T>(data: FormData) => axios({
        method: 'post',
        url: 'http://isapi.mekashron.com/soapclient/soapclient.php?URL=http://isapi.icu-tech.com/icutech-test.dll/wsdl/IICUTech',
        data: data,
        headers: {
            'Content-Type': `multipart/form-data; boundary`,
        },
    }).then(responseBody)
  }


const Login = {
    create: (data: FormData) => requests.postf<void>(data),
}

const agent = {
  Login
}

export default agent;