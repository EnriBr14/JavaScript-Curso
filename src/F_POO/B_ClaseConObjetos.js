class Peaple{
    //Agregar un objeto como argumento
    constructor({name, job, phone, facebook, instagram}){
        this.name = name;
        this.job = job;
        this.phone = phone;
        this.socialMedia = {
            facebook: facebook,
            instagram: instagram
        }
    }

    showInfo(){
        console.log(`
        nombre: ${this.name}
        apellido: ${this.job}
        PhoneNumber: ${this.phone}
        Social Media: ${this.socialMedia}
        `)
    }
}

const g1 = new Peaple({
    name: "Serg",
    job: "Enginner",
    phone: "72259798",
    socialMedia: {
        facebook: "https://www.facebook.com/sergio",
        instagram: "@Sergj"
    }
})

g1.showInfo()

Peaple.prototype.showSocialMedia = function(){
    console.log(`
    This is my facebook: ${this.facebook}
    `)
}

g1.showSocialMedia()