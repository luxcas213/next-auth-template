const htmlemail = (url: string) => 
   `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sign In to Your Account</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8fafc;">
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
          <div style="background-color: rgba(255, 255, 255, 0.1); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px);">
            <div style="color: white; font-size: 36px; font-weight: bold;">🔐</div>
          </div>
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Welcome Back!</h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
          <h2 style="color: #2d3748; margin: 0 0 20px 0; font-size: 24px; font-weight: 600; text-align: center;">Sign in to your account</h2>
          
          <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0; text-align: center;">
            Click the secure link below to access your account. This link will expire in 24 hours for your security.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${url}" style="
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 16px 32px;
              text-decoration: none;
              border-radius: 50px;
              display: inline-block;
              font-weight: 600;
              font-size: 16px;
              box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
              transition: all 0.3s ease;
              border: none;
              cursor: pointer;
            ">
              🚀 Sign In Securely
            </a>
          </div>
          
          <div style="background-color: #f7fafc; border-left: 4px solid #667eea; padding: 20px; margin: 30px 0; border-radius: 8px;">
            <p style="color: #4a5568; font-size: 14px; line-height: 1.5; margin: 0;">
              <strong>Security tip:</strong> If you didn't request this email, you can safely ignore it. Your account remains secure.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #718096; font-size: 14px; margin: 0;">
              Having trouble? Copy and paste this link into your browser:
            </p>
            <p style="color: #667eea; font-size: 12px; word-break: break-all; margin: 10px 0 0 0; background-color: #f7fafc; padding: 10px; border-radius: 6px;">
              ${url}
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #718096; font-size: 14px; margin: 0 0 10px 0; line-height: 1.5;">
            This email was sent from a secure, monitored service.
          </p>
          <p style="color: #a0aec0; font-size: 12px; margin: 0;">
            © ${new Date().getFullYear()} Your App. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  
export default htmlemail;