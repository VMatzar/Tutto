import { Injectable } from '@angular/core';
import { Profile } from '@core/models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  /**
   * Data simulating a return of an API
   */
  profiles: Profile[] = [
    /**
     * First profile:
     */
    {
      profile_id: 5432,
      first_name: 'Victor',
      last_name: 'Matzar',
      email: 'elmatzar123@gmail.com',
      profile_image: 'https://image.freepik.com/vector-gratis/diseno-de-fondo-de-repartidor_1212-470.jpg',
      jobs_completed: 120,
      hours_worked: 4,
      bio: 'Audantium voluptate. Blanditiis, officiis quos. Dolores eveniet placeat repellat debitis sit delectus dolorum sequi.',
      stars: 4.2,
      comments: [
      {
        comment_id: 458,
        username: 'Daniel Craig',
        comment: 'Good Employee',
        user_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5KLpz_pqrcrVBMdAT06-vgpZ8XuaRNnzOg&usqp=CAU',
        date: '13/08/2022'
      },
      {
        comment_id: 784,
        username: 'Joana Velez',
        comment: 'Good Service',
        user_image:'https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg',
        date: '13/08/2022'
      }]
    },
    /**
     * Second profile:
    */
    {
      profile_id: 3,
      first_name: 'Jose',
      last_name: 'Mcguille',
      email: 'mcguille35@gmail.com',
      profile_image: 'https://image.freepik.com/vector-gratis/repartidor-caja-camion-ilustracion-concepto-envio-aislado-estilo-plano-dibujos-animados_138676-1136.jpg',
      jobs_completed: 200,
      hours_worked: 9,
      bio: 'Audantium voluptate. Blanditiis, officiis quos. Dolores eveniet placeat repellat debitis sit delectus dolorum sequi.',
      stars: 4.8,
      comments: [
      {
        comment_id: 56,
        username: 'Lucia Palacios',
        comment: 'the Best one!',
        user_image: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg',
        date: '5/08/2022'
      },
      {
        comment_id: 784,
        username: 'Joana Velez',
        comment: 'He gave me the fastest service I ever had!',
        user_image:'https://i0.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg',
        date: '19/06/2022'
      }]
    }
  ]
  constructor() { }
   
  getAllProfiles() {
    return this.profiles;
  }
  getProfile(id: number) {
    return this.profiles.find(item => item.profile_id === id);
  }
}
