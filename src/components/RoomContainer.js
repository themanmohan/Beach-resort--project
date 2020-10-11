import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../Context'
import Loading from './Loading';

function RoomConatiner({context}){
    const {loading,sortedRooms,rooms}=context;
    if(loading){
              return <Loading />
                 }
                   
                    return(
                        <div>
                           <RoomsFilter rooms={rooms}/>
                           <RoomsList rooms={sortedRooms}/>
                        </div>
                    )
                    
}
export default withRoomConsumer(RoomConatiner)

// import React from 'react'
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {RoomConsumer} from '../Context'
// import Loading from './Loading';
// export default function RoomConatiner() {
//     return (
//         <RoomConsumer>
//         {
//         (value) =>{
//             const {loading,sortedRooms,rooms}=value;
//             if(loading){
//                 return <Loading />
//             }
           
//             return(
//                 <div>
//                    <RoomsFilter rooms={rooms}/>
//                    <RoomsList rooms={sortedRooms}/>
//                 </div>
//             )
//         }
//         }
//         </RoomConsumer>
       
//     )
// }
