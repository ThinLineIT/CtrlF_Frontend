import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';

export default function Top() {
  return (
    <header>
      <span>
        <Link href="/">
          <Image
            src="/images/LOGO_SOLO 1.svg"
            alt="Ctrl_F Logo"
            width={133.71}
            height={49.96}
          />
        </Link>
        <Link href="/">
          <h1>커넵</h1>
        </Link>
      </span>
      <div className="ui icon input">
        <input type="text" placeholder="Search..." />
        <i aria-hidden="true" className="search circular link icon"></i>
      </div>
      <div>
        <Link href="/src/components/Login">로그인 |</Link>
        <Link href="/src/components/Register">회원가입</Link>
      </div>
    </header>
  );
}
