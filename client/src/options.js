import React, { useEffect, useState } from "react";
import "./options.css"
function Options()
{
    const [c_con_name,setc_con_name]=useState([])
    const [c_lasttd,setc_lasttd]=useState([])
    const [c_strike,setc_strike]=useState([])
    const [c_lastp,setc_lastp]=useState([])
    const [c_bid,setc_bid]=useState([])
    const [c_ask,setc_ask]=useState([])
    const [c_change,setc_change]=useState([])
    const [c_pchange,setc_pchange]=useState([])
    const [c_vol,setc_vol]=useState([])
    const [c_openint,setc_openint]=useState([])
    const [c_im_vola,setc_im_vola]=useState([])

    const [p_con_name,setp_con_name]=useState([])
    const [p_lasttd,setp_lasttd]=useState([])
    const [p_strike,setp_strike]=useState([])
    const [p_lastp,setp_lastp]=useState([])
    const [p_bid,setp_bid]=useState([])
    const [p_ask,setp_ask]=useState([])
    const [p_change,setp_change]=useState([])
    const [p_pchange,setp_pchange]=useState([])
    const [p_vol,setp_vol]=useState([])
    const [p_openint,setp_openint]=useState([])
    const [p_im_vola,setp_im_vola]=useState([])

    const res=c_con_name.map((c,i)=>(
        {
            Contract:c,
            last_trade_date:c_lasttd[i],
            strike:c_strike[i],
            last_price:c_lastp[i],
            bid:c_bid[i],
            ask:c_ask[i],
            change:c_change[i],
            per_change:c_pchange[i],
            volume:c_vol[i],
            open_interest:c_openint[i],
            volatility:c_im_vola[i],

        }
    ))
    const res2=p_con_name.map((c,i)=>(
        {
            Contract:c,
            last_trade_date:p_lasttd[i],
            strike:p_strike[i],
            last_price:p_lastp[i],
            bid:p_bid[i],
            ask:p_ask[i],
            change:p_change[i],
            per_change:p_pchange[i],
            volume:p_vol[i],
            open_interest:p_openint[i],
            volatility:p_im_vola[i],

        }
    ))
    useEffect(()=>
    {
        fetch('http://localhost:5000/calls',{
                    'methods':'GET',
                    headers : {
                      'Content-Type':'application/json'
                    }
                  }).then(response=>response.json()).then(DATA=>{
                    setc_con_name(DATA.Contract_Name)
                    setc_lasttd(DATA.Last_Trade_Date)
                    setc_strike(DATA.Strike)
                    setc_lastp(DATA.Last_Price)
                    setc_bid(DATA.Bid)
                    setc_ask(DATA.Ask)
                    setc_change(DATA.Change)
                    setc_pchange(DATA.Change_percent)
                    setc_vol(DATA.Volume)
                    setc_openint(DATA.Open_Interest)
                    setc_im_vola(DATA.Implied_Volatility)
                  }).catch(error=>console.log(error))
    })

    useEffect(()=>
    {
        fetch('http://localhost:5000/puts',{
                    'methods':'GET',
                    headers : {
                      'Content-Type':'application/json'
                    }
                  }).then(response=>response.json()).then(DATA=>{
                    setp_con_name(DATA.Contract_Name)
                    setp_lasttd(DATA.Last_Trade_Date)
                    setp_strike(DATA.Strike)
                    setp_lastp(DATA.Last_Price)
                    setp_bid(DATA.Bid)
                    setp_ask(DATA.Ask)
                    setp_change(DATA.Change)
                    setp_pchange(DATA.Change_percent)
                    setp_vol(DATA.Volume)
                    setp_openint(DATA.Open_Interest)
                    setp_im_vola(DATA.Implied_Volatility)
                  }).catch(error=>console.log(error))
    })
    
    return(
        <div>
            <br></br>
            <h3 className="op_heading">Calls</h3>
            <table className="otable_display">
                <tr >
                    <th>Contract Name</th>
                    <th>Last Trade Date</th>
                    <th>Strike</th>
                    <th>Last Price</th>
                    <th>Bid</th>
                    <th>Ask</th>
                    <th>Change</th>
                    <th>% Change</th>
                    <th>Volume</th>
                    <th>Open Interest</th>
                    <th>Implied Volatility</th>
                </tr>
                {res.map((value,i)=>(<tr key={i}>
                    <td>{value.Contract}</td>
                    <td>{value.last_trade_date}</td>
                    <td>{value.strike}</td>
                    <td>{value.last_price}</td>
                    <td>{value.bid}</td>
                    <td>{value.ask}</td>
                    <td>{value.change}</td>
                    <td>{value.per_change}</td>
                    <td>{value.volume}</td>
                    <td>{value.open_interest}</td>
                    <td>{value.volatility}</td>
                </tr>))}
            </table>
            <br></br>
            <h3 className="op_heading">Puts</h3>
            <table className="otable_display">
                <tr>
                    <th>Contract Name</th>
                    <th>Last Trade Date</th>
                    <th>Strike</th>
                    <th>Last Price</th>
                    <th>Bid</th>
                    <th>Ask</th>
                    <th>Change</th>
                    <th>% Change</th>
                    <th>Volume</th>
                    <th>Open Interest</th>
                    <th>Implied Volatility</th>
                </tr>
                {res2.map((value,i)=>(<tr key={i}>
                    <td>{value.Contract}</td>
                    <td>{value.last_trade_date}</td>
                    <td>{value.strike}</td>
                    <td>{value.last_price}</td>
                    <td>{value.bid}</td>
                    <td>{value.ask}</td>
                    <td>{value.change}</td>
                    <td>{value.per_change}</td>
                    <td>{value.volume}</td>
                    <td>{value.open_interest}</td>
                    <td>{value.volatility}</td>
                </tr>))}
            </table>
        </div>
    )
}
export default Options