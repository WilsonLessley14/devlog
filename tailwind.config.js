module.exports = {
	theme: {
		extend: {
			colors: {
				bg: 'var(--bg)',
				text: 'var(--text)',
				subtext: 'var(--subtext)',
				brand: 'var(--brand)',
				link: 'var(--link)',
				hoverLink: 'var(--hover-link)',
				success: 'var(--success)',
				successHover: 'var(--success-hover)',
				error: 'var(--error)',
				errorHover: 'var(--error-hover)',
				warning: 'var(--warning)',
				warningHover: 'var(--warning-hover)',
				info: 'var(--info)',
				infoHover: 'var(--info-hover)',
				surface: 'var(--surface)',
				surfaceHover: 'var(--surface-hover)',
				border: 'var(--border)',
				borderHover: 'var(--border-hover)'
			},
			fontFamily: {
				sans: 'var(--font-sans)',
				mono: 'var(--font-mono)'
			},
			fontSize: {
				xs: 'var(--font-size-xs)',
				sm: 'var(--font-size-sm)',
				base: 'var(--font-size-base)',
				lg: 'var(--font-size-lg)',
				xl: 'var(--font-size-xl)',
				'2xl': 'var(--font-size-2xl)',
				'3xl': 'var(--font-size-3xl)',
				'4xl': 'var(--font-size-4xl)'
			},
			fontWeight: {
				normal: 'var(--font-weight-normal)',
				medium: 'var(--font-weight-medium)',
				semibold: 'var(--font-weight-semibold)',
				bold: 'var(--font-weight-bold)'
			},
			lineHeight: {
				tight: 'var(--line-height-tight)',
				normal: 'var(--line-height-normal)',
				relaxed: 'var(--line-height-relaxed)'
			},
			letterSpacing: {
				tight: 'var(--letter-spacing-tight)',
				normal: 'var(--letter-spacing-normal)',
				wide: 'var(--letter-spacing-wide)'
			},
			spacing: {
				0: 'var(--spacing-0)',
				1: 'var(--spacing-1)',
				2: 'var(--spacing-2)',
				3: 'var(--spacing-3)',
				4: 'var(--spacing-4)',
				5: 'var(--spacing-5)',
				6: 'var(--spacing-6)',
				8: 'var(--spacing-8)',
				10: 'var(--spacing-10)',
				12: 'var(--spacing-12)',
				16: 'var(--spacing-16)',
				20: 'var(--spacing-20)',
				24: 'var(--spacing-24)'
			},
			borderRadius: {
				none: 'var(--radius-none)',
				sm: 'var(--radius-sm)',
				DEFAULT: 'var(--radius-base)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
				'2xl': 'var(--radius-2xl)',
				full: 'var(--radius-full)'
			},
			boxShadow: {
				sm: 'var(--shadow-sm)',
				DEFAULT: 'var(--shadow-md)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
				none: 'var(--shadow-none)'
			},
			transitionDuration: {
				fast: '150ms',
				DEFAULT: '200ms',
				slow: '300ms'
			},
			transitionTimingFunction: {
				DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			zIndex: {
				base: '0',
				dropdown: '1000',
				sticky: '1100',
				fixed: '1200',
				'modal-backdrop': '1300',
				modal: '1400',
				popover: '1500',
				tooltip: '1600'
			}
		}
	}
};
