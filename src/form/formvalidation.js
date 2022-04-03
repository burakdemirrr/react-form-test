export const formvalidation=(formData)=>{
    if(!formData.firstName || !formData.lastName || !formData.password || !formData.email){
        return "Lütfen bilgileri eksiksiz doldurun."
    }
    if(!formData.email.includes('@')){
        return 'E-posta geçersiz.'
    }
    return false;
}