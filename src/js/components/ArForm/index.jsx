import React, { useState } from 'react';
import { addArItem } from '../../actions';
import { connect } from 'react-redux';

export const ArForm = ({ addArItem }) => {
  const defaultreaction = {
    description: '',
    severity: '',
    observationDate: ''
  };
  const [ reaction, setReaction ] = useState(defaultreaction);
  const severity = [1,2,3,4,5,6,7,8,9,10];
  
  const addReaction = (e) => {
    e.preventDefault();
    addArItem(reaction);
    setReaction(defaultreaction);
  };
  
  const updateReacton = (e, key) => {
    setReaction({
      ...reaction, 
      [key]: e.target.value
    })
  };
  
  const isValid = reaction.description === '' || reaction.observationDate === '' || reaction.severity === '';
  return (<form className="form-container">
    <input className="desc" type="text" placeholder="description" value={reaction.description} onChange={(e) => updateReacton(e, 'description')}/>
    <input type="date" value="2020-10-10" value={reaction.observationDate} onChange={(e) => updateReacton(e, 'observationDate')}/>
    <select value={reaction.severity} onChange={(e) => updateReacton(e, 'severity')}>
    <option value=""> Severity </option>
      {
        severity.map((option)=>{
          return (<option key={option} value={option}> {option} </option>)
        })
      }
    </select>
    <button disabled={isValid} onClick={addReaction}> Add Reaction </button>
  </form>);
}

const mapDispatchToProps = dispatch => {
  return {
    addArItem: item => {
      dispatch(addArItem(item));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ArForm);
