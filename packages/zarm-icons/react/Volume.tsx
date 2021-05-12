import * as React from 'react';
import { Icon } from 'zarm';
import type { IconProps } from 'zarm';

const SvgVolume = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 1000 1000"
        fill="currentColor"
        focusable={false}
        aria-hidden="true"
        ref={svgRef}
      >
        <path
          d="M810.15 874.348c-8.687 0-17.376-3.026-24.37-9.105a36.447 36.447 0 01-3.47-51.714c74.253-83.94 142.954-179.956 142.954-313.862 0-133.877-68.701-229.949-142.955-313.806a36.474 36.474 0 013.47-51.77c15.39-13.329 38.631-11.833 52.186 3.36 79.804 90.158 161.33 203.661 161.33 362.244 0 158.555-81.609 272.086-161.303 362.161a37.196 37.196 0 01-27.841 12.492zM684.24 749.852c-7.467 0-15.045-2.22-21.568-6.884a36.502 36.502 0 01-8.495-51.214l14.685-19.875c38.306-51.436 71.366-95.904 71.366-172.24 0-79.11-29.313-117.472-66.453-166.049-6.579-8.577-13.102-17.21-19.597-26.093a36.474 36.474 0 018.494-51.214c16.617-11.853 39.683-8.1 51.685 8.411 6.052 8.41 12.297 16.6 18.46 24.65 40.027 52.435 81.387 106.646 81.387 210.323 0 100.43-45.524 161.692-85.773 215.793l-14.101 19.153c-7.218 9.993-18.57 15.239-30.09 15.239zM111.033 317.657c-20.314-.047-36.85 16.327-37.002 36.64v290.685c0 20.235 16.627 36.668 37.002 36.668h111.033c9.798 0 19.236 3.858 26.148 10.743l222.12 184.73c3.943 3.886 7.496 7.106 10.799 9.827V112.385a174.46 174.46 0 00-10.854 9.882L248.214 306.859c-6.94 6.94-16.35 10.77-26.148 10.77H111.033v.028zm386.783 654.122c-24.233 0-48.744-16.683-79.75-42.776L206.743 754.987h-95.71C49.826 754.96 0 705.633 0 644.954V354.298c0-60.652 49.826-110.006 111.033-110.006h95.71L417.955 70.415C449.072 43.933 473.166 28 497.621 28c26.537 0 57.543 17.932 57.543 68.34v806.654c0 50.77-30.895 68.785-57.348 68.785z"
          fillRule="nonzero"
        />
      </svg>
    ),
  });
};

const ForwardRef = React.forwardRef(SvgVolume);
export default ForwardRef;
