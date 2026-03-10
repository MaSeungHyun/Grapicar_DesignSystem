export function EyeIcon({ visible }: { visible: boolean }) {
  return (
    <svg width={13} height={13} viewBox="0 0 14 14" fill="none" className="shrink-0">
      {visible ? (
        <>
          <ellipse cx="7" cy="7" rx="5" ry="3.5" stroke="currentColor" strokeWidth={1.3} />
          <circle cx="7" cy="7" r="1.6" fill="currentColor" />
        </>
      ) : (
        <>
          <ellipse
            cx="7"
            cy="7"
            rx="5"
            ry="3.5"
            stroke="currentColor"
            strokeWidth={1.3}
            opacity={0.25}
          />
          <line
            x1="2.5"
            y1="11.5"
            x2="11.5"
            y2="2.5"
            stroke="currentColor"
            strokeWidth={1.3}
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export function LockIcon({ locked }: { locked: boolean }) {
  return (
    <svg
      width={11}
      height={13}
      viewBox="0 0 12 14"
      fill="none"
      className="shrink-0"
      style={{ opacity: locked ? 1 : 0.25 }}
    >
      <rect x="1.5" y="6" width="9" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.3} />
      <path d="M3.5 6V4a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth={1.3} />
    </svg>
  );
}

export function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width={9}
      height={9}
      viewBox="0 0 10 10"
      fill="none"
      className="shrink-0 transition-transform duration-150 ease-out"
      style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <path
        d="M3.5 2L7 5L3.5 8"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** assets/canvas2d_c_icon_s.svg 기반 */
export function CanvasIcon({ className }: { className?: string } = {}) {
  return (
    <svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      className={className ?? "shrink-0"}
      aria-hidden
    >
      <g transform="translate(-1885 -608)">
        <rect
          width={10}
          height={10}
          transform="translate(1885 608)"
          fill="none"
        />
        <path
          d="M.879.659A.208.208,0,0,0,.669.865V7.619a.208.208,0,0,0,.209.206h6.9a.208.208,0,0,0,.209-.206V.865A.208.208,0,0,0,7.782.659H.879M.879,0h6.9a.872.872,0,0,1,.879.865V7.619a.872.872,0,0,1-.879.865H.879A.872.872,0,0,1,0,7.619V.865A.872.872,0,0,1,.879,0Z"
          transform="translate(1885.67 608.714)"
          fill="currentColor"
        />
        <path
          d="M.37-4.109v-.457q.4-.377.72-.693a4.109,4.109,0,0,0,.5-.581.894.894,0,0,0,.179-.493.58.58,0,0,0-.052-.26.355.355,0,0,0-.15-.157A.48.48,0,0,0,1.33-6.8a.5.5,0,0,0-.307.1,2.27,2.27,0,0,0-.258.222L.33-6.912A1.85,1.85,0,0,1,.83-7.3a1.336,1.336,0,0,1,.608-.128,1.2,1.2,0,0,1,.57.13.957.957,0,0,1,.386.365,1.069,1.069,0,0,1,.139.554,1.172,1.172,0,0,1-.148.549,3.191,3.191,0,0,1-.379.556q-.231.276-.482.536.126-.018.28-.031t.267-.013h.614v.673Zm2.928,0V-7.45h.96a2.13,2.13,0,0,1,.89.173,1.281,1.281,0,0,1,.59.536,1.872,1.872,0,0,1,.211.946,1.943,1.943,0,0,1-.209.953,1.3,1.3,0,0,1-.579.554,1.946,1.946,0,0,1-.859.179Zm.8-.646h.108a1.149,1.149,0,0,0,.478-.094.675.675,0,0,0,.325-.323A1.387,1.387,0,0,0,5.129-5.8a1.341,1.341,0,0,0-.117-.619.647.647,0,0,0-.325-.307,1.226,1.226,0,0,0-.478-.087H4.1Z"
          transform="translate(1886.86 618.779)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

/** assets/object_c_icon_s.svg 기반 */
export function ObjectIcon({ className }: { className?: string } = {}) {
  return (
    <svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      className={className ?? "shrink-0"}
      aria-hidden
    >
      <g transform="translate(-2079 -162)">
        <rect
          width={10}
          height={10}
          transform="translate(2079 162)"
          fill="none"
        />
        <path
          d="M6.441,8.571V7.847H8.035V5.7h.536V8.571ZM0,8.571V5.7H.536V7.847H2.13v.724Zm8.035-5.7V.724H6.441V0h2.13V2.875ZM0,2.875V0H2.13V.723H.536V2.875Z"
          transform="translate(2079.714 162.714)"
          fill="currentColor"
        />
        <path
          d="M3.171,3.56,6,1.915V5.193L3.171,6.862ZM0,5.242V1.95L2.784,3.576V6.835ZM.2,1.633,3,0,5.8,1.633,3,3.284Z"
          transform="translate(2081 163.569)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
