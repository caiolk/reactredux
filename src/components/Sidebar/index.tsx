import React from 'react';

import { connect } from 'react-redux'

import * as CourseActions from '../../store/actions/course';

import { bindActionCreators } from 'redux';

const Sidebar = ({ modules, toggleLesson }:any) => {
  
        return (
            <aside>
                { modules.map( (module:any) => 
                    (<div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map( (lesson:any) => (
                                <li key={lesson.id}>
                                    {lesson.title}
                                    <button onClick={() => toggleLesson(module,lesson)}>Selecionar</button>
                                </li>)
                            )}
                        </ul>
                    </div>
                ))}
            </aside>
        );
                            }

const mapStateToProps = (state:any) => ({
    modules: state.course.modules
})
 
const mapDispatchToProps = (dispatch:any) =>  bindActionCreators(CourseActions,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);