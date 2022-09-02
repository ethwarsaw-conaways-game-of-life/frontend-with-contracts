import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <div class="header">
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-100,-100) scale(1 1)">
          <g id="eye1"><ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_1" cy="154.5" cx="181.5" stroke="#000" fill="#fff"/><ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#000" fill="#000000"/></g><g id="head"><ellipse fill="#2bdca4" stroke-width="3" cx="204.5" cy="211.80065" id="svg_5" rx="74" ry="51.80065" stroke="#000"/></g><g id="eye2"><ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_2" cy="168.5" cx="209.5" stroke="#000" fill="#fff"/><ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#000000" stroke="#000"/></g><g class="bow" transform="translate(180,235) scale(0.10 0.10)"><path fill="#774c7b" d="M476.532,135.396c-12.584-7.796-29-7.356-46.248,1.228l-117.868,59.88c-10.048-9.7-23.728-14.452-38.816-14.452h-50.156c-15.204,0-28.992,4.828-39.064,14.652L66.1,137.256c-17.232-8.58-33.836-9.336-46.412-1.544C7.1,143.508,0,158.1,0,177.368v141.104c0,19.268,7.1,34.18,19.68,41.96c5.972,3.708,12.904,5.556,20.28,5.556c8.164,0,17.04-2.256,26.092-6.764l118.312-58.14c10.072,9.824,23.88,16.588,39.08,16.588H273.6c15.084,0,28.78-6.692,38.82-16.396l117.884,58.276c9.068,4.512,17.9,6.596,26.064,6.596c7.388,0,14.192-1.928,20.164-5.636C489.108,352.72,496,337.744,496,318.476V177.368C496,158.1,489.108,143.192,476.532,135.396z"/></g><g class="mouth" transform="translate(23,0)"><path d="M 130 240 Q 165 250 199 235" stroke="black" stroke-width="3" fill="transparent"/></g><g class="mustache" transform="translate(140,195) scale(1.50 1.50)"><path fill="#5e68ee" d="M21.455,13.025c-0.604-3.065-5.861-4.881-7.083-2.583c-1.22-2.299-6.477-0.483-7.081,2.583C6.501,16.229,2.321,17.11,0,15.439c0,3.622,3.901,3.669,6.315,3.9c5.718-0.25,7.525-2.889,8.057-4.093c0.532,1.205,2.34,3.843,8.058,4.093c2.416-0.231,6.315-0.278,6.315-3.9C26.423,17.11,22.244,16.229,21.455,13.025z"/></g><g id="eye1"><ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#6bae58" fill="#6bae58"/></g><g id="eye2"><ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#6bae58" stroke="#6bae58"/></g><g class="eyelash"><path d="M 164 130 Q 154 125 169 118" stroke="#d8b199" stroke-width="1" fill="transparent"/><path d="M 171 127 Q 161 122 176 115" stroke="#d8b199" stroke-width="1" fill="transparent"/><path d="M 179 125 Q 169 120 184 113" stroke="#ba6ef0" stroke-width="1" fill="transparent"/><path d="M 186 126 Q 176 121 191 114" stroke="#d8b199" stroke-width="1" fill="transparent"/><path d="M 194 127 Q 184 122 199 115" stroke="#d8b199" stroke-width="1" fill="transparent"/><path d="M 196 142 Q 186 137 201 130" stroke="#d8b199" stroke-width="1" fill="transparent"/><path d="M 203 140 Q 193 135 208 128" stroke="#d8b199" stroke-width="1" fill="transparent"/><path d="M 211 139 Q 201 134 216 127" stroke="#ba6ef0" stroke-width="1" fill="transparent"/><path d="M 218 141 Q 208 136 223 129" stroke="#d8b199" stroke-width="1" fill="transparent"/><path d="M 226 143 Q 216 138 231 131" stroke="#d8b199" stroke-width="1" fill="transparent"/></g>
        </g>
      </svg>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-100,-100) scale(1 1)">
          <g id="eye1"><ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_1" cy="154.5" cx="181.5" stroke="#000" fill="#fff"/><ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#000" fill="#000000"/></g><g id="head"><ellipse fill="#f40206" stroke-width="3" cx="204.5" cy="211.80065" id="svg_5" rx="58" ry="51.80065" stroke="#000"/></g><g id="eye2"><ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_2" cy="168.5" cx="209.5" stroke="#000" fill="#fff"/><ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#000000" stroke="#000"/></g><g class="bow" transform="translate(180,235) scale(0.10 0.10)"><path fill="#6603fa" d="M476.532,135.396c-12.584-7.796-29-7.356-46.248,1.228l-117.868,59.88c-10.048-9.7-23.728-14.452-38.816-14.452h-50.156c-15.204,0-28.992,4.828-39.064,14.652L66.1,137.256c-17.232-8.58-33.836-9.336-46.412-1.544C7.1,143.508,0,158.1,0,177.368v141.104c0,19.268,7.1,34.18,19.68,41.96c5.972,3.708,12.904,5.556,20.28,5.556c8.164,0,17.04-2.256,26.092-6.764l118.312-58.14c10.072,9.824,23.88,16.588,39.08,16.588H273.6c15.084,0,28.78-6.692,38.82-16.396l117.884,58.276c9.068,4.512,17.9,6.596,26.064,6.596c7.388,0,14.192-1.928,20.164-5.636C489.108,352.72,496,337.744,496,318.476V177.368C496,158.1,489.108,143.192,476.532,135.396z"/></g><g class="mouth" transform="translate(25,0)"><path d="M 130 240 Q 165 250 197 235" stroke="black" stroke-width="3" fill="transparent"/></g><g class="mustache" transform="translate(140,195) scale(1.50 1.50)"><path fill="#51ac14" d="M21.455,13.025c-0.604-3.065-5.861-4.881-7.083-2.583c-1.22-2.299-6.477-0.483-7.081,2.583C6.501,16.229,2.321,17.11,0,15.439c0,3.622,3.901,3.669,6.315,3.9c5.718-0.25,7.525-2.889,8.057-4.093c0.532,1.205,2.34,3.843,8.058,4.093c2.416-0.231,6.315-0.278,6.315-3.9C26.423,17.11,22.244,16.229,21.455,13.025z"/></g><g id="eye1"><ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#c7216d" fill="#c7216d"/></g><g id="eye2"><ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#c7216d" stroke="#c7216d"/></g><g class="eyelash"><path d="M 164 130 Q 154 125 169 113" stroke="#5edd35" stroke-width="1" fill="transparent"/><path d="M 171 127 Q 161 122 176 110" stroke="#5edd35" stroke-width="1" fill="transparent"/><path d="M 179 125 Q 169 120 184 108" stroke="#156756" stroke-width="1" fill="transparent"/><path d="M 186 126 Q 176 121 191 109" stroke="#5edd35" stroke-width="1" fill="transparent"/><path d="M 194 127 Q 184 122 199 110" stroke="#5edd35" stroke-width="1" fill="transparent"/><path d="M 196 142 Q 186 137 201 125" stroke="#5edd35" stroke-width="1" fill="transparent"/><path d="M 203 140 Q 193 135 208 123" stroke="#5edd35" stroke-width="1" fill="transparent"/><path d="M 211 139 Q 201 134 216 122" stroke="#156756" stroke-width="1" fill="transparent"/><path d="M 218 141 Q 208 136 223 124" stroke="#5edd35" stroke-width="1" fill="transparent"/><path d="M 226 143 Q 216 138 231 126" stroke="#5edd35" stroke-width="1" fill="transparent"/></g>
        </g>
      </svg>
      <h1>FancyLoogies</h1>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-100,-100) scale(1 1)">
          <g id="eye1"><ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_1" cy="154.5" cx="181.5" stroke="#000" fill="#fff"/><ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#000" fill="#000000"/></g><g id="head"><ellipse fill="#435348" stroke-width="3" cx="204.5" cy="211.80065" id="svg_5" rx="85" ry="51.80065" stroke="#000"/></g><g id="eye2"><ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_2" cy="168.5" cx="209.5" stroke="#000" fill="#fff"/><ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#000000" stroke="#000"/></g><g class="bow" transform="translate(180,235) scale(0.10 0.10)"><path fill="#53ff15" d="M476.532,135.396c-12.584-7.796-29-7.356-46.248,1.228l-117.868,59.88c-10.048-9.7-23.728-14.452-38.816-14.452h-50.156c-15.204,0-28.992,4.828-39.064,14.652L66.1,137.256c-17.232-8.58-33.836-9.336-46.412-1.544C7.1,143.508,0,158.1,0,177.368v141.104c0,19.268,7.1,34.18,19.68,41.96c5.972,3.708,12.904,5.556,20.28,5.556c8.164,0,17.04-2.256,26.092-6.764l118.312-58.14c10.072,9.824,23.88,16.588,39.08,16.588H273.6c15.084,0,28.78-6.692,38.82-16.396l117.884,58.276c9.068,4.512,17.9,6.596,26.064,6.596c7.388,0,14.192-1.928,20.164-5.636C489.108,352.72,496,337.744,496,318.476V177.368C496,158.1,489.108,143.192,476.532,135.396z"/></g><g class="mouth" transform="translate(19,0)"><path d="M 130 240 Q 165 250 186 235" stroke="black" stroke-width="3" fill="transparent"/></g><g class="mustache" transform="translate(140,195) scale(1.50 1.50)"><path fill="#f091ea" d="M21.455,13.025c-0.604-3.065-5.861-4.881-7.083-2.583c-1.22-2.299-6.477-0.483-7.081,2.583C6.501,16.229,2.321,17.11,0,15.439c0,3.622,3.901,3.669,6.315,3.9c5.718-0.25,7.525-2.889,8.057-4.093c0.532,1.205,2.34,3.843,8.058,4.093c2.416-0.231,6.315-0.278,6.315-3.9C26.423,17.11,22.244,16.229,21.455,13.025z"/></g><g id="eye1"><ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#1c6aa5" fill="#1c6aa5"/></g><g id="eye2"><ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#1c6aa5" stroke="#1c6aa5"/></g><g class="eyelash"><path d="M 164 130 Q 154 125 169 116" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 171 127 Q 161 122 176 113" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 179 125 Q 169 120 184 111" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 186 126 Q 176 121 191 112" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 194 127 Q 184 122 199 113" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 196 142 Q 186 137 201 128" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 203 140 Q 193 135 208 126" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 211 139 Q 201 134 216 125" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 218 141 Q 208 136 223 127" stroke="#ad26e5" stroke-width="1" fill="transparent"/><path d="M 226 143 Q 216 138 231 129" stroke="#ad26e5" stroke-width="1" fill="transparent"/></g>
        </g>
      </svg>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-100,-100) scale(1 1)">
          <g id="eye1"><ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_1" cy="154.5" cx="181.5" stroke="#000" fill="#fff"/><ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#000" fill="#000000"/></g><g id="head"><ellipse fill="#8ac512" stroke-width="3" cx="204.5" cy="211.80065" id="svg_5" rx="44" ry="51.80065" stroke="#000"/></g><g id="eye2"><ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_2" cy="168.5" cx="209.5" stroke="#000" fill="#fff"/><ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#000000" stroke="#000"/></g><g class="bow" transform="translate(180,235) scale(0.10 0.10)"><path fill="#e29dad" d="M476.532,135.396c-12.584-7.796-29-7.356-46.248,1.228l-117.868,59.88c-10.048-9.7-23.728-14.452-38.816-14.452h-50.156c-15.204,0-28.992,4.828-39.064,14.652L66.1,137.256c-17.232-8.58-33.836-9.336-46.412-1.544C7.1,143.508,0,158.1,0,177.368v141.104c0,19.268,7.1,34.18,19.68,41.96c5.972,3.708,12.904,5.556,20.28,5.556c8.164,0,17.04-2.256,26.092-6.764l118.312-58.14c10.072,9.824,23.88,16.588,39.08,16.588H273.6c15.084,0,28.78-6.692,38.82-16.396l117.884,58.276c9.068,4.512,17.9,6.596,26.064,6.596c7.388,0,14.192-1.928,20.164-5.636C489.108,352.72,496,337.744,496,318.476V177.368C496,158.1,489.108,143.192,476.532,135.396z"/></g><g class="mouth" transform="translate(37,0)"><path d="M 130 240 Q 165 250 198 235" stroke="black" stroke-width="3" fill="transparent"/></g><g class="mustache" transform="translate(140,195) scale(1.50 1.50)"><path fill="#2ea8af" d="M21.455,13.025c-0.604-3.065-5.861-4.881-7.083-2.583c-1.22-2.299-6.477-0.483-7.081,2.583C6.501,16.229,2.321,17.11,0,15.439c0,3.622,3.901,3.669,6.315,3.9c5.718-0.25,7.525-2.889,8.057-4.093c0.532,1.205,2.34,3.843,8.058,4.093c2.416-0.231,6.315-0.278,6.315-3.9C26.423,17.11,22.244,16.229,21.455,13.025z"/></g><g id="eye1"><ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#3d6803" fill="#3d6803"/></g><g id="eye2"><ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#3d6803" stroke="#3d6803"/></g><g class="eyelash"><path d="M 164 130 Q 154 125 169 112" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 171 127 Q 161 122 176 109" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 179 125 Q 169 120 184 107" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 186 126 Q 176 121 191 108" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 194 127 Q 184 122 199 109" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 196 142 Q 186 137 201 124" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 203 140 Q 193 135 208 122" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 211 139 Q 201 134 216 121" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 218 141 Q 208 136 223 123" stroke="#370503" stroke-width="1" fill="transparent"/><path d="M 226 143 Q 216 138 231 125" stroke="#370503" stroke-width="1" fill="transparent"/></g>
        </g>
      </svg>
    </div>
  );
}
