import { API_BASE_URL } from '../api-config';

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type" : "application/json",
    });

    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken!=null){
        headers.append("Authorization", "Bearer " + accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if(request) {
        //GET
        options.body = JSON.stringify(request);
    }
    return fetch(options.url, options)
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else if(response.status === 403){
            window.location.href = "/login";
        }else{
            Promise.regect(response);
            throw Error(response);
        }
    })
    .catch((error) => {
        console.log("http error");
        console.log(error);
    });
}

export function signin(userDTO){
    return call("/auth/signin", "POST", userDTO)
    .then((response) => {
        // console.log("response : ", response);
        // alert("로그인 토큰: " + response.token);
        if(response.token){
            localStorage.setItem("ACCESS_TOKEN", response.token); //토큰 저장
            window.location.href="/"; //토큰이 존재하는 경우 Todo 화면으로 리다이렉트
        }
    });
}