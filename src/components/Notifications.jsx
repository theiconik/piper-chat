import { useContext } from 'react';
import { Button } from '@material-ui/core';
import {SocketContext} from '../SocketContext';

const Notifications = () => {
   
   const { answerCall, call, callAccepted } = useContext(SocketContext);

   if(call.isReceivingCall && !callAccepted) {
      console.log('pickup call');
   }
   
   return ( 
      <>
      {call.isReceivingCall && !callAccepted && (
         <div style={{display: 'flex', justifyContent: 'center',}}>
            <h1 style={{ fontFamily: 'Cairo'}}>{call.name} is calling : &nbsp;</h1>
            <Button
            variant="contained"
            style={{ backgroundColor: "green", color:"white" }}
            onClick={answerCall}
            >Answer</Button>
         </div>
      )}
      </>
    );
}
 
export default Notifications;