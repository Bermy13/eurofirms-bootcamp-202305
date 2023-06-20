function retrievePosts() {
    const posts2 =[]

    // problematica: introducir dentro de cada post, la informacion del user que lo creo

    //solucion
    // bucle que busque cada uno de los posts
    // por cada post, recojo el id del usuario que lo creo
    // con ese id, busco dentro de mi array de usuarios, el user.id que coincida con el id guardado en la propiedad user de cada post
    // una vez encontrado el user, almaceno el objeto user (id y nombre) en la propiedad user del post (sobreescribiendola)
    // una vez terminado, retorno los posts
    for(let i = 0; i < posts.length ; i++){
        const post = posts[i]
        
        const post2 = {}
        post2.id = post.id
        post2.image = post.image
        post2.text = post.text
        post2.author = {}
       
        for( let j = 0 ; j < users.length ; j++){
            const user = users[j]
            
            if (user.id === post.author){
                post2.author.id = user.id
                post2.author.name = user.name
                
                break
            }

        }
        posts2.push(post2)
    }

    return posts2
}