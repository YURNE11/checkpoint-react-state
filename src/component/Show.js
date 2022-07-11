import img from "./../img.png"
 

export const Show = ({data}) =>{


    return(

        <div className="bigbox">
            <div className="box1">

                <p>MON NOM :{data.person.fullName}</p>
                <p>MA PERSONNE :{data.person.bio}</p>
                <p>MA PROFESSION :{data.person.profession}</p>

            </div>

            <div className='box2'>
            <img src={img} id="img"/>

            </div>
        </div> 
    )
}