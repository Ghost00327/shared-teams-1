interface BadgeProps {
  status: string;
}

function Badge({ status }: BadgeProps) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Support Needed':
        return 'bg-[#D4C200]/10 text-[#D4C200]';
      case 'Update Needed':
        return 'bg-[#F56732]/10 text-[#F56732]';
      case 'Specialized Support':
        return 'bg-[#DC3545]/10 text-[#DC3545]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
}

export default Badge; 