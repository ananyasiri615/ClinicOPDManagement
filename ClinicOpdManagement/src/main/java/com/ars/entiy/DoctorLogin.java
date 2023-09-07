package com.ars.entiy;

public class DoctorLogin {
	
	private String email;
	private String password;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public DoctorLogin(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	public DoctorLogin() {
		super();
	}
	
	@Override
	public String toString() {
		return "DoctorLogin [email=" + email + ", password=" + password + "]";
	}
}
