package com.paf.model;
import java.io.IOException; 
import java.util.HashMap; 
import java.util.Map; 
import java.util.Scanner;

@WebServlet("/PaymentsAPI") 
public class PaymentsAPI extends HttpServlet  {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			 throws ServletException, IOException 
			{ 
			 String output = paymentObj.insertPayment(request.getParameter("AccNumber"), 
			 request.getParameter("DateOfPayment"), 
			request.getParameter("Amount"), 
			request.getParameter("TypeOfPayment")); 
			response.getWriter().write(output); 
			}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request) 
	{ 
	 Map<String, String> map = new HashMap<String, String>(); 
	try
	 { 
	 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
	 String queryString = scanner.hasNext() ? 
	 scanner.useDelimiter("\\A").next() : ""; 
	 scanner.close(); 
	 String[] params = queryString.split("&"); 
	 for (String param : params) 
	 { 
		 String[] p = param.split("="); 
		 map.put(p[0], p[1]); 
		 } 
		 } 
		catch (Exception e) 
		 { 
		 } 
		return map; 
		}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) 
			 throws ServletException, IOException 
			{ 
			 Map paras = getParasMap(request); 
			 String output = paymentObj.updatePayment(paras.get("hidAccNumberSave").toString(), 
			 paras.get("AccNumber").toString(), 
			 paras.get("DateOfPayment").toString(), 
			 paras.get("Amount").toString(), 
			 paras.get("TypeOfPayment").toString()); 
			response.getWriter().write(output); 
			} 
			protected void doDelete(HttpServletRequest request, HttpServletResponse response) 
			 throws ServletException, IOException 
			{ 
			 Map paras = getParasMap(request); 
			 String output = paymentObj.deletePayment(paras.get("AccNumber").toString()); 
			response.getWriter().write(output); 
			}


}
