'use strict'
EC.StudentsClassroomsHeader = React.createClass({


  getInitialState: function() {
    return {classrooms: null}
  },

  componentDidMount: function() {
    $.ajax({url: 'students_classrooms', format: 'json', success: this.updateClassrooms})
  },

  updateClassrooms: function(data) {
    this.setState({classrooms: data.classrooms})
  },

  isActive: function(id) {
    if (id === this.props.currentClassroomId) {
     return 'active';
     }
  },


  mapClassrooms: function() {
    var that = this
    var classrooms = _.map(this.state.classrooms, function(classroom) {
      return (
        <div className={that.isActive(classroom.id) + ' classroom-box'} key={classroom.id}>
        <div>{classroom.teacher}</div>
        <div>{classroom.name}</div>
      </div>
    )
    });
    return classrooms
  },

  render: function() {
    return(<div>{this.mapClassrooms()}</div>)
  }




})