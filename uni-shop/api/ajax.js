 
 const BASE_URL='http://localhost:8082'
 export default function ajax(url,method='GET',data={}){
	
	return new Promise((res,rej)=>{
		uni.request({
		    url:BASE_URL+url,
		    data,
			method,
		    success: (mes) => {
		      res(mes)
			
		    }
		});
	})
	 
 }