import React, { act } from 'react'
import "./services.css"
import Card from '../../Components/Card/Card'
import "../../Components/Card/card.css"
 
 
const Services = (name, text, props) => {
  let data = [
    {
      name: "Contract Execution Upload",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
      name: "E Stamp Services",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
      name: "E Sign Services",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    }
  ];

  const pendingActions = [
    {
      id: "trd35468",
      timeLeft: "10 days left",
      message: "2 files are waiting to be Uploaded",
    },
    {
      id: "3325567",
      timeLeft: "10 days left",
      message: "2 files are waiting to be Uploaded",
    },
    {
      id: "7629347",
      timeLeft: "10 days ago",
      message: "2 files are waiting to be Uploaded",
    },
    {
      id: "5673428",
      timeLeft: "10 days ago",
      message: "2 files are waiting to be Uploaded",
    },
  ];


  const newdata = data.map((item) => {
    return <Card name={item.name} dis={item.text} />;
  });

  

  

  return (
    <div className='main-cards'>
      <div className='first-session'>
        <div className='firstbox'>
          <h3 style={{ fontSize: "20px" }}>👋Welcome back, Michle</h3>
          <p>25 May 2023, Tuesday</p>
        </div>
        <br />
        <div className='secondbox'>
          <div className='secinfo'>
            <h4>My Wallet <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16">
              <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
            </svg></h4>
            <h1 style={{ fontSize: "40px", }}>$2,50,000</h1>
            <p>Current balance</p>
            <p style={{position : "relative", bottom :  "10px"}}>Running low!
              <a href="">notifyme</a>now
            </p>
          </div>
        </div>
        <br />
        <div className='thirdbox'>
          <h3 style={{ marginLeft: "10px", marginTop: "10px" }}>Pending Actions</h3>
          <div className='thirdbox-internal'>
            {pendingActions.map(action => (
              <div key={action.id}>
                <div className='sub-boxes'>
                  <span style={{fontSize :"20px"}}>#{action.id}</span>
                  <span  style={{border : "2px solid grey", marginLeft : "40px",borderRadius : "5px", backgroundColor : "rgb(245, 239, 239" }}>{action.timeLeft}</span>
                  <p>{action.message}</p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
<div>
<div className='second-session'>
        <h3 className='a'>Frequently Used</h3>
        <div className='cardsss'>
          {newdata}
        </div>
        
      </div>

       <div style={{display : "flex", marginTop : "20px",marginLeft : "20px"}}>
        <div>
        <select name="" id="" style={{width: "200px"}}>
        <option value="">All Branches</option>
      </select>
        </div>
        <div className='part-two'>
        <select name="" id=""  style={{ borderRadius : "5px"}}>
        <option value="">Coustum Range</option>
      </select><select name="" id="" style={{marginLeft : "20px", borderRadius : "5px"}}>
        <option value="">March 22</option>
      </select>
        </div>
       </div>

       <div className='final-box'>
        <div className='orders'>
          <h4>Order Details</h4>
          <a href="" style={{marginLeft : "850px"}} >View All</a>
        </div>
        <div className='abcd'>
        <div  className='final-inner'>
           <div className='abc'>
            <h2>18</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg>
           </div>
           <p>total orders</p>
           <p>+2.4%</p>
        </div>
        <div  className='final-inner'>
           <div className='abc'>
            <h2>10</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
           </div>
           <p>in Progress</p>
           <p>+2.4%</p>
        </div>
        <div  className='final-inner'>
           <div className='abc'>
            <h2>5</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
</svg>
           </div>
           <p>total orders</p>
           <p>+2.4%</p>
        </div>
        <div  className='final-inner'>
           <div className='abc'>
            <h2>3</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box2-fill" viewBox="0 0 16 16">
  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6z"/>
</svg>
           </div>
           <p>order Cancel</p>
           <p>+2.4%</p>
        </div>
        </div>

        


       </div>

      <div className='ending-boxes'>
        <div  className='ending1'>
          <h4 style={{margin : "20px"}}>E Sign Count</h4>
          <div className='checkbox'>
 <span>
 <input type="radiobutton" style={{width : "20px",height:"20px", backgroundColor:"lightgreen" }} /> initiate
 <input type="radiobutton" style={{width : "20px",height:"20px", backgroundColor:"yellow" }} />pending
 </span>
          </div>
          <div  className='checkbox'>
          <span>
          <input type="radiobutton" style={{width : "20px",height:"20px", backgroundColor:"orange" }} /> signed
          <input type="radiobutton" style={{width : "20px",height:"20px", backgroundColor:"green" }} />expired
 </span>
          </div>
           
          
          <div className='final-image-two'>
            <img src=" https://www.simplifiedcoding.net/wp-content/uploads/2020/11/Screenshot_20201124_212730.png" alt="" style={{width : "200px"}} />
          </div>
         
        </div>




        <div className='ending2'>
        <h4 style={{margin : "20px"}}>E Stamp Count</h4>
        <div className='checkbox'>
 <span>
 <input type="radiobutton" style={{width : "20px",height:"20px", backgroundColor:"blue" }} /> initiate
 <input type="radiobutton" style={{width : "20px",height:"20px", backgroundColor:"grey" }} />pending
 </span>
          </div>
          <div  className='checkbox'>
          <span>
            <input type="radiobutton" style={{width : "20px",height:"20px", backgroundColor:"rgb(164,109,216" }} />signed..
   
            <input type="radiobutton" style={{width : "20px",height:"20px", backgroundColor:"78, 32,131" }} />  expired
 </span>
          </div>

          <div className='final-image'>
            <img src="https://docs.telerik.com/devtools/wpf/controls/radcircularprogressbar/images/radcircularprogressbar-overview-1.png" alt="" style={{width : "100px"}} />
          </div>
        </div>

      </div>


       
</div>
      
       
      


    </div>
  );
}

export default Services;




