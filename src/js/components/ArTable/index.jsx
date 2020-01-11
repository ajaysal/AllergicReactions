import React, { useState } from 'react';
import { connect } from 'react-redux';

export const ArTable = ({ arItems }) => {
  const [ activePanel, setActivePanel ] = useState({
    index: null,
    isAsc: false
  });

  const updateActivePanel = (index) => {
    setActivePanel({
      isAsc: false,
      index
    });
  };

  const sortBySeverity = () => {
    setActivePanel({
      ...activePanel,
      isAsc: !activePanel.isAsc
    });
  };

  const reactions = arItems; 
  const arReactions = {};
  reactions.forEach((reaction) => {
    arReactions[reaction.description] = arReactions[reaction.description] ? [...arReactions[reaction.description], reaction] : [reaction];
  });

  return (
    <div>
      <table class="root-table">
        {
          Object.keys(arReactions).map((reaction, index) => {
            let isActivePanel = index===activePanel.index;
            let icon = isActivePanel ? 'chevron top' : 'chevron bottom';
            return (<React.Fragment key={'i'+index}><tr>
              <th>{reaction} <span onClick={()=> updateActivePanel(isActivePanel ? null : index)} className={icon}></span></th>
            </tr>
             { isActivePanel && <tr>
                <td>
                  <table className="child-table">
                    <tr>
                      <th> Date</th>
                      <th className='sort-by' onClick={()=> sortBySeverity()} > Severity </th>
                    </tr>
                    {
                      arReactions[reaction].sort((item1, item2)=>{
                        if(activePanel.isAsc) {
                          return item1.severity-item2.severity;
                        }
                        return item2.severity-item1.severity;
                      }).map((reactionItem) => {
                        return (<tr key={Math.random()+reactionItem.severity}>
                          <td> {reactionItem.observationDate} </td>
                          <td> {reactionItem.severity} </td>
                        </tr>)
                      })
                    }
                  </table>
                </td>
              </tr>}
            </React.Fragment>)
          })
        }
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  arItems: state.reactionsReducer.arItems,
});

export default connect(
  mapStateToProps
)(ArTable);