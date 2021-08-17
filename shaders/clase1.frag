// Author: @solquemal
// Title: Clase  - Intro a shaders 

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
#define PI 3.14

vec3 cosPalette(  float t ){
    vec3 a = vec3(0.2);  
    vec3 b = vec3(0.2);  
    vec3 c = vec3(0.194,0.200,0.037);     
    vec3 d = vec3(.1,0.25,0.34); 
    return a + b*cos( 6.28318*(c*t+d) );
}
void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy *2.-1.; vec3 color;  
	vec2 uvT = vec2(cos(u_time),sin(u_time))*0.5;
    
    float radius = distance(uv,vec2(uvT)); float angle = atan(uv.x,uv.y) +u_time;
    float circle = 1. - smoothstep(0.15,.18,radius);
    color += circle*cos(angle)+cosPalette(circle)*.2/dot(uv,uv); 
    
    
    radius = distance(uv,uvT)+distance(uvT,vec2(uvT*.5)); 
    float circle2 = 1. - smoothstep(0.0,.09,radius);
    
       
   	color += circle2;
    
    gl_FragColor = vec4( color, 1.0 );
    }
    