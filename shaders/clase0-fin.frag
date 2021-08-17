/Users/solsarratea/Downloads/clase-0.gif
// Author: @solquemal
// Title: Clase 0 - Intro a shaders 

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy *2.-1.; vec2 st = uv;
    uv.x *= u_resolution.x/u_resolution.y;
    
    //Transformaciones
    // Rotacion
    float a = u_time*-0.400;
    uv.yx *= mat2(cos(a*.2),sin(a),-sin(a),cos(a*.2));
    //Escalar
 	uv *= min(1./dot(uv,uv),10.);//pow(length(uv),2.0); == dot(uv,uv)
   
    //Color
    vec3 color;

    color.r = sin(distance(uv.x,0.)*uv.x+u_time*-0.448);
    color.b = sin(5.744+distance(uv.y,0.)*uv.y+u_time*0.5);
    color.g = cos(distance(uv.x,0.)*-uv.x+u_time*0.9);
    
    color *=0.042/dot(color,st.xyy)*1.616;

    gl_FragColor = vec4(color,1.0);

} 
