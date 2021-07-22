import React from 'react'

export default function Table(props){

    return(

        <table className="bodyrows">

            <tbody>

            {props.rows.filter(

                (row, index)=>{

                    if(props.search==="" && !props.scroll){

                        if(index>=(props.counter*5) && index<=(props.counter*5+4)) return row;

                    } else if( row.param.toLowerCase().includes( props.search.toLowerCase() ) ) return row;

                else return null;

                return null;

                }).map(row => {

                    return (

                        <tr>
                            <td className="has-para">{row.param}</td>
                            <td>{row.current}</td>
                            <td>{row.avg}</td>
                            <td>{row.max}</td>
                            <td>{row.min}</td>
                        </tr>

                    );
                })
            }
            </tbody>
        </table>    
    );
}

//
//