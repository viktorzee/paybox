import {  FaEye, FaEyeSlash } from "react-icons/fa";
import NotificationPower from "../components/NotificationPower";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import {BsChevronDoubleRight} from "react-icons/bs"



const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(false);   

  const toggleBalanceView = () => {
    setShowBalance(!showBalance);
  }
  const lineWidth = 26;
  const balanceRow = [
    {
      title: "Total savings balance",
      amount: "₦194,000",
    },
    {
      title: "Total customers",
      amount: "₦919",
    },
    {
      title: "Total POS",
      amount: "₦0",
    },
  ]
  const transferRow = [
    {
      title: "Total  Transfers",
      today: "₦500",
      yesterday: "₦200",
      lastWeek: "₦500",
      lastMonth: "₦200"
    },
    {
      title: "Total  inflow",
      today: "₦2,000,000",
      yesterday: "₦5,000,000",
      lastWeek: "₦5,000,000",
      lastMonth: "₦5,000,000"
    },
    {
      title: "Total  Transactions",
      today: "₦2,000,000",
      yesterday: "₦5,000,000",
      lastWeek: "₦2,000,000",
      lastMonth: "₦5,000,000"
    },
    {
      title: "Total  Transactions",
      today: "₦2,000,000",
      yesterday: "₦5,000,000",
      lastWeek: "₦5,000,000",
      lastMonth: "₦5,000,000"
    },

  ]
  
  return (
    <> 
      <div className="md:flex justify-between  items-center p-3 bg-[rgba(3,34,130,1)] md:bg-[rgba(255,255,255,1)] w-full mb-5 pl-6 xl:pl-0 md:rounded-t-3xl">
          <h1 className="md:text-[rgba(36,36,36,1)] text-white md:text-2xl text-base p-2 ml-4">Analytics dashboard</h1>
          <div className="hidden lg:block p-2">
            <NotificationPower />
          </div>
      </div>             
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 p-5">
        <div className="bg-[rgba(3,34,130,1)] p-6 rounded-lg">
          <div>
            <h3 className="text-white">Wallet Balance</h3>
            <div className="flex items-center mb-4 md:mb-7 xl:mb-4">
              <p className="mr-4 font-semibold text-white">
                {showBalance ? "****" :
                "₦50,000,000"                  
                }
              </p>
              <div onClick={toggleBalanceView} className="text-white">
                {!showBalance ? <FaEyeSlash  /> : <FaEye />}
              </div>
            </div>
            <div className="flex">
                <button className="btn mr-4">
                  Add Funds
                </button>
                <button className="btn">
                  Withdraw
                </button>
            </div>
          </div>
        </div>
        {balanceRow.map(bal => (
          <div className="text-lg bg-[rgba(255,255,255,1)] font-bold  p-3 rounded-lg">
            <div className="bg-[rgba(246,250,255,1)] p-5 rounded-xl">
              <h3 className="text-[rgba(79,100,167,1)] font-normal font-nunito text-sm">{bal.title}</h3>
              <p className="font-semibold md:mt-6 text-[rgba(3,34,130,1)] font-sora">{bal.amount}</p>
            </div>
            <Link to="#" className="font-normal text-xs md:mr-6 text-[rgba(3,34,130,1)] font-sora">
              <div className="flex items-center">
              View details            
              <BsChevronDoubleRight className="text-[rgba(3,34,130,1)]" />

              </div>
            </Link>
          </div>
        ))}        
       
        {transferRow.map(trans => (  
          <div className="text-lg bg-[rgba(255,255,255,1)] font-bold  p-3 rounded-lg">
            <div className="bg-[rgba(246,250,255,1)] p-5 rounded-xl">
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[rgba(79,100,167,1)] font-nunito font-normal">{trans.title}</p>
                  <select className="md:px-2 px-1 bg-[rgba(234,244,255,1)] text-[rgba(3,34,130,1)] font-sora font-normal text-sm py-1 text-center border rounded md:w-[5.7rem] md:ml-2">
                    <option value="more" >More</option>
                    <option value="yesterday" >Yesterday</option>
                    <option value="last-week" >Last Week</option>
                    <option value="last-month" >Last Month</option>
                  </select>
                </div>
              </div>
            
              <div className="flex flex-row justify-between mb-4">
                <div className="text-center mb-2 sm:mb-0">
                  <p className="text-xs text-left text-[rgba(79,100,167,1)] font-nunito font-normal">Today</p>
                  <p className="text-sm md:text-base xl:text-lg font-semibold text-[rgba(3,34,130,1)] font-sora mr-3">{trans.today}</p>
                </div>
                <div className="">
                  <p className="text-xs text-[rgba(79,100,167,1)] font-nunito font-normal">Yesterday</p>
                  <p className={`${trans.yesterday === "₦200" && "md:mr-[3rem]"} text-sm md:text-base xl:text-lg text-[rgba(3,34,130,1)] font-sora font-semibold`}>{trans.yesterday}</p>
                </div>
              </div>
              
              <div className="flex flex-row justify-between">
                <div className="mb-2 sm:mb-0">
                  <p className="text-sm text-[rgba(79,100,167,1)] font-nunito font-normal">Last Week</p>
                  <p className="text-sm md:text-base xl:text-lg text-[rgba(3,34,130,1)] font-sora font-semibold mr-3">{trans.lastWeek}</p>
                </div>
                <div>
                  <p className="text-sm text-left text-[rgba(79,100,167,1)] font-nunito font-normal md:mr-6">Last Month</p>
                  <p className="text-sm md:text-base xl:text-lg text-[rgba(3,34,130,1)] font-sora font-semibold">{trans.lastMonth}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
                          
        <div className="text-lg bg-[rgba(255,255,255,1)] font-bold  p-3 rounded-lg">
          <div className="bg-[rgba(246,250,255,1)] p-4 rounded-xl">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <p className="text-sm text-[rgba(79,100,167,1)] font-nunito font-normal">Total Cashout</p>
                <select className="md:px-2 px-1 bg-[rgba(234,244,255,1)] text-[rgba(3,34,130,1)] font-sora font-normal text-sm py-1 text-center border rounded md:w-[5.7rem] md:ml-2">
                  <option value="today" >Today</option>
                  <option value="yesterday" >Yesterday</option>
                  <option value="last-week" >Last Week</option>
                  <option value="last-month" >Last Month</option>
                </select>
              </div>
            </div>
          
            <div className="flex flex-row justify-between mb-4">
              <div className="text-center mb-2 sm:mb-0">
                <p className="text-xs text-left text-[rgba(79,100,167,1)] font-nunito font-normal">Today</p>
                <p className="text-sm md:text-base xl:text-lg font-semibold text-[rgba(3,34,130,1)] font-sora">₦1,200,000</p>
              </div>
              <div className="">
                <p className="text-xs text-left text-[rgba(79,100,167,1)] font-nunito font-normal">Yesterday</p>
                <p className="text-sm md:text-base xl:text-lg text-[rgba(3,34,130,1)] font-sora font-semibold">₦1,200,000</p>
              </div>
            </div>                            
          </div>
        </div>          
        <div className="text-lg bg-[rgba(255,255,255,1)] font-bold  p-3 rounded-lg">
          <div className="bg-[rgba(246,250,255,1)] p-4 rounded-xl">
            <div className="mb-7">
              <div className="flex justify-between items-center">
                <p className="text-sm text-[rgba(79,100,167,1)] font-nunito font-normal">Transaction status</p>
                <select className="md:px-2 px-1 bg-[rgba(234,244,255,1)] text-[rgba(3,34,130,1)] font-sora font-normal text-sm py-1 text-center border rounded md:w-[5.7rem] md:ml-2s">
                  <option value="today" >Today</option>
                  <option value="yesterday" >Yesterday</option>
                  <option value="last-week" >Last Week</option>
                  <option value="last-month" >Last Month</option>
                </select>
              </div>
            </div>
          
            <div className="flex flex-row justify-between mb-4">
              <div className="text-center mb-2 sm:mb-0">
              <div className="flex items-center">
                  <div
                    className="w-2 h-2 mr-2 bg-[rgba(24,162,1,1)] rounded-full"
                    
                  />
                  <p className="text-[rgba(55,71,79,1)] font-medium text-xs">Successful</p>
                </div>              
                <p className="text-sm md:text-base xl:text-lg font-semibold text-[rgba(3,34,130,1)] font-sora text-center">422</p>
              </div>
              <div className="">
              <div className="flex items-center">
                  <div
                    className="w-2 h-2 mr-2 bg-[rgba(255,0,0,1)] rounded-full"
                    
                  />
                  <p className="text-[rgba(55,71,79,1)] font-medium text-xs">Failed</p>
                </div>
                <p className="text-sm md:text-base xl:text-lg text-[rgba(3,34,130,1)] font-sora text-center font-semibold">18</p>
              </div>
            </div>                            
          </div>
        </div>          
        <div className="text-lg bg-[rgba(255,255,255,1)] font-bold  p-3 rounded-lg">
          <div className="bg-[rgba(246,250,255,1)] p-4 rounded-xl">
            <div className="mb-7">
              <div className="flex justify-between items-center">
                <p className="text-sm text-[rgba(79,100,167,1)] font-nunito font-normal">Average transaction Count</p>
                <select className="md:px-2 px-1 bg-[rgba(234,244,255,1)] text-[rgba(3,34,130,1)] font-sora font-normal text-sm py-1 text-center border md:w-[5.7rem] md:ml-2 rounded">
                  <option value="today" >Today</option>
                  <option value="yesterday" >Yesterday</option>
                  <option value="last-week" >Last Week</option>
                  <option value="last-month" >Last Month</option>
                </select>
              </div>
            </div>
          
            <div className="flex flex-row justify-between mb-4">
              <div className="text-center mb-2 sm:mb-0">
                <p className="text-xs text-left text-[rgba(79,100,167,1)] font-nunito font-normal">Value</p>
                <p className="text-sm md:text-base xl:text-lg text-left font-semibold text-[rgba(3,34,130,1)] font-sora">₦20,400</p>
              </div>
              <div className="">
                <p className="text-xs text-[rgba(79,100,167,1)] font-nunito font-normal">Count</p>
                <p className="text-sm md:text-base xl:text-lg text-[rgba(3,34,130,1)] font-sora font-semibold">422</p>
              </div>
            </div>                            
          </div>
        </div>          
        <div className="text-lg bg-[rgba(255,255,255,1)] font-bold  p-3 rounded-lg">
          <div className="bg-[rgba(246,250,255,1)] p-4 rounded-xl">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <p className="text-sm text-[rgba(79,100,167,1)] font-nunito font-normal">Total commission</p>
                <select className="md:px-2 px-1 bg-[rgba(234,244,255,1)] text-[rgba(3,34,130,1)] font-sora font-normal text-sm py-1 text-center border rounded md:w-[5.7rem] md:ml-2">
                  <option value="today" >Today</option>
                  <option value="yesterday" >Yesterday</option>
                  <option value="last-week" >Last Week</option>
                  <option value="last-month" >Last Month</option>
                </select>
              </div>
            </div>
          
            <div className="flex flex-row justify-between mb-4">
              <div className="text-center mb-2 sm:mb-0">
                <p className="text-xs text-[rgba(79,100,167,1)] font-nunito font-normal">POS commission</p>
                <p className="text-sm md:text-base xl:text-lg text-left font-semibold text-[rgba(3,34,130,1)] font-sora">₦87,000</p>
              </div>
              <div className="">
                <p className="text-xs text-[rgba(79,100,167,1)] font-nunito font-normal">Lotto commission</p>
                <p className="text-sm md:text-base xl:text-lg text-left text-[rgba(3,34,130,1)] font-sora font-semibold">₦102,000</p>
              </div>
            </div>                            
          </div>
        </div>          
        <div className="text-lg bg-[rgba(255,255,255,1)] font-bold  p-3 rounded-lg">
          <div className="bg-[rgba(246,250,255,1)] p-4 rounded-xl">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-[rgba(79,100,167,1)] font-nunito font-normal">Average commission per transaction</p>
                <select className="md:px-2 px-1 bg-[rgba(234,244,255,1)] text-[rgba(3,34,130,1)] font-sora font-normal text-sm py-1 text-center border rounded">
                  <option value="today" >Today</option>
                  <option value="yesterday" >Yesterday</option>
                  <option value="last-week" >Last Week</option>
                  <option value="last-month" >Last Month</option>
                </select>
              </div>
            </div>
          
            <div className="flex flex-row justify-between mb-4">
              <div className="text-center mb-2 sm:mb-0">
                <p className="text-xs text-[rgba(79,100,167,1)] font-nunito font-normal">POS commission</p>
                <p className="text-sm md:text-base xl:text-lg text-left font-semibold text-[rgba(3,34,130,1)] font-sora">₦500</p>
              </div>
              <div className="">
                <p className="text-xs text-[rgba(79,100,167,1)] font-nunito font-normal">Lotto commission</p>
                <p className="text-sm md:text-base xl:text-lg text-[rgba(3,34,130,1)] font-sora font-semibold">₦200</p>
              </div>
            </div>                            
          </div>
        </div>          
        <div className="md:col-span-2 bg-[rgba(255,255,255,1)] font-bold  p-3 rounded-lg md:flex justify-around">                        
          <div className="mt-7">
            <p className="text-base text-[rgba(55,71,79,1)] font-semibold mb-5">Transaction Comparative</p>
            
            <div className="mb-5">
              <div className="flex items-center">
                <div
                  className="w-2 h-2 mr-2 bg-[rgba(3,34,130,1)] rounded-full"
                
                />
                <p className="text-[rgba(55,71,79,1)] font-normal text-xs">Send Money</p>
              </div>
              <p className="font-semibold text-[rgba(38,50,56,1)] text-base">₦150,000,000</p>
            </div>
            <div className="grid grid-cols-2">                   
              <div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 mr-2 bg-[rgba(237,225,255,1)] rounded-full"
                    
                  />
                  <p className="text-[rgba(55,71,79,1)] font-medium text-xs">Cashout</p>
                </div>
                <p className="text-sm md:text-base font-semibold text-[rgba(38,50,56,1)]">₦12,000,000</p>
              </div>
              <div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 mr-2 bg-[rgba(244,190,56,1)] rounded-full"
                    
                  />
                  <p className="text-[rgba(55,71,79,1)] font-medium text-xs">Utilities and Bills</p>
                </div>
                <p className="text-sm md:text-base font-semibold text-[rgba(38,50,56,1)]">₦42,000,000</p>
              </div>

            </div>
          </div>
          <div className="mt-4" style={{ height: '10rem' }}>
              <PieChart
                data={[
                  { title: 'Send Money', value: 75, color: 'rgba(3, 34, 130, 1)' },
                  { title: 'Cashout', value: 12, color: 'rgba(244, 190, 55, 1)' },
                  { title: 'Bills and Utilities', value: 12, color: 'rgba(237, 225, 255, 1)' },
                ]}
                startAngle={120}
                lineWidth={30}
                paddingAngle={7}
                label={({ dataEntry }) => {
                  return `${Math.round(dataEntry.percentage)}%`;
                }}
                labelPosition={100 - lineWidth / 2}
                labelStyle={() => ({
                  fontSize: '8px',
                  fontFamily: 'sans-serif',
                  fill: '#fff',
                  background: '#000',
                  backgroundColor: "#000", 
                  borderRadius: '5px', // Rounded corners for the background
                  padding: '5px', // Padding for the background
                })}
              />
          </div>
        </div>
        
      </div>

    </>
  );
};
  
export default Dashboard;