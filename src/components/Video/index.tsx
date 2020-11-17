import React from 'react';

import { connect } from 'react-redux';

const Video =  (activeModule:any,activeLesson:any) => {
   console.log('activeModule',activeModule)
//    console.log('\n')
    console.log('activeLesson',activeLesson)
//    console.log('\n')
    return (

        <div style={{padding:10}}>
            <strong> Módulo </strong>
            <span>- Aula </span>
        </div>
    );

}

export default connect( (state:any) => ({
    activeModule: state.activeModule,
    activeLesson: state.activeLesson
 }))(Video)