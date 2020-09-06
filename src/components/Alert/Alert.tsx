import React from 'react';
import classNames from 'classnames';



export enum AlertType {
  Success = 'success',
  Default = 'default',
  Warning = 'warning',
  Danger = 'danger'
}

interface BaseAlertProps {
  className?: string,
  alertType?: AlertType,
  children?: React.ReactNode,
  title?: string
}


export type AlertProps = Partial<BaseAlertProps>

const Alert: React.FC<AlertProps> = (props) => {
  const { alertType, className, children, title, ...restProps } = props;

  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType,
  })

  // <button className={classes} {...restProps} >{children}</button>

  return (
    <div className={classes} {...restProps}>
      <h4>{title}</h4>
      <span>{children}</span>
      <span>关闭</span>
    </div>
  )
}

Alert.defaultProps = {
  alertType: AlertType.Default
}

export default Alert
