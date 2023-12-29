from flask import Flask,request,jsonify
import plotly
import yfinance as yf
import yahoo_fin.stock_info as ya
from yahoo_fin import options
import keras.models
import sys 
import os
import pandas as pd
import numpy as np
import plotly.express as px 
from flask_cors import cross_origin,CORS
sys.path.append(os.path.abspath("./model"))
from model.load import *
global model
model=init()#loading the model

app=Flask(__name__)
CORS(app)
# Getting data from the frontend 
@app.route('/post', methods=['POST'])
@cross_origin()
def sendData():
    if request.method=='POST':
        content=request.get_json()
        print(content)
        global ticker
        ticker=content['ticker']
        print(ticker)
        global day
        Day=content['day']
        day=int(Day)
        
    return "send the data"
#Displaying the predicted result
@app.route('/predict',methods=['GET'])

def prediction():
    print (ticker)
    tic=yf.Ticker(ticker)
    look_back=2
    global y
    y=tic.history(period="max")
    close_data=y["Close"].values
    close_data = close_data.reshape((-1))
    prediction_list = close_data[-look_back:]
   
    for _ in range(day-1):
        x = prediction_list[-look_back:]
        x = x.reshape((1, look_back, 1))
        out = model.predict(x)[0][0]
        prediction_list = np.append(prediction_list, out)
    prediction_list = prediction_list[look_back-1:]
    prediction_list=prediction_list.tolist()
    last_date=y.index[-1]   
    prediction_dates = pd.date_range(last_date, periods=day).tolist()
    global data
    data={'Date':prediction_dates,"prediction":prediction_list}
    Data=jsonify(data)
    Data.headers.add("Access-Control-Allow-Origin", "*")
    return Data
# Displaying the graph
@app.route('/graph' ,methods=['GET'])
def graph():
    
    
    index_value=np.arange(1,day+2)
    pred_df=pd.DataFrame(data)
    fig2= px.line(pred_df, x='Date', y='prediction',template="plotly_dark")
    fig2.update_traces(line_color="green")
    x=plotly.io.to_json(fig2,pretty=True)
    return x 
#Getting the ticker symbol for historical data
@app.route("/hist",methods=['POST'])
@cross_origin()
def historic():
    if request.method=='POST':
        hist_content=request.get_json()
        print(hist_content)
        global hticker
        hticker=hist_content['ht']
        global interval
        interval=hist_content['selected']
        print(hticker)
        print(interval)
#Displaying historical data
@app.route("/hist_get",methods=['GET'])
def get_hist():
    tic=yf.Ticker(hticker)
    df=tic.history(period=interval)
    dic=dict()
    for col in df.columns:
        dic[col]=df[col].values.tolist()
    return jsonify(dic)
#Displaying the summmary
@app.route("/summary",methods=['GET'])
def get_summary():
   quote_data=ya.get_quote_table(hticker,dict_result=False).fillna(0)
   
   quote_dic=dict()
   for col in quote_data.columns:
       quote_dic[col]=quote_data[col].values.tolist()
   return jsonify(quote_dic)
#Displaying the market status
@app.route("/status",methods=['GET'])
def status_fetch():
    status=ya.get_market_status()
    st_dic={"status":status}
    return st_dic
#Displaying the calls data
@app.route("/calls",methods=['GET'])
def op_calls():
    opc=options.get_calls(hticker)
    opc.rename(columns = {'Contract Name':'Contract_Name'}, inplace = True)
    opc.rename(columns = {'Last Trade Date':'Last_Trade_Date'}, inplace = True)
    opc.rename(columns = {'% Change':'Change_percent'}, inplace = True)
    opc.rename(columns = {'Last Price':'Last_Price'}, inplace = True)
    opc.rename(columns = {'Open Interest':'Open_Interest'}, inplace = True)
    opc.rename(columns = {'Implied Volatility':'Implied_Volatility'}, inplace = True)
    
    odic=dict()
    for col in opc.columns:
        odic[col]=opc[col].values.tolist()
    return jsonify(odic)
#Displaying the puts data
@app.route("/puts",methods=['GET'])
def op_puts():
    opp=options.get_calls(hticker)
    opp.rename(columns = {'Contract Name':'Contract_Name'}, inplace = True)
    opp.rename(columns = {'Last Trade Date':'Last_Trade_Date'}, inplace = True)
    opp.rename(columns = {'% Change':'Change_percent'}, inplace = True)
    opp.rename(columns = {'Last Price':'Last_Price'}, inplace = True)
    opp.rename(columns = {'Open Interest':'Open_Interest'}, inplace = True)
    opp.rename(columns = {'Implied Volatility':'Implied_Volatility'}, inplace = True)
    
    odip=dict()
    for col in opp.columns:
        odip[col]=opp[col].values.tolist()
    return jsonify(odip)
if __name__ == '__main__':
    app.run(debug=True)