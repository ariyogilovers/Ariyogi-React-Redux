import React, { Component } from 'react'
import { connect } from 'react-redux'

export class StateFullComponent extends Component {
  render() {
    return (
      <div>StateFullComponent</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StateFullComponent)