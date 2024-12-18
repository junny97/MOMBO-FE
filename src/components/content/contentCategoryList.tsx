import VirtualList from '<prefix>/components/common/virtualList/virtualList';
import FaqItem from '<prefix>/components/faq/faqItem';
import { FAQResponse, WeekInfoResponse } from '<prefix>/shared/types/content';

interface ContentCategoryListProps {
  category: string;
  faqItems: FAQResponse[];
  weekInfoItems: WeekInfoResponse[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

export default function ContentCategoryList({
  category,
  faqItems,
  weekInfoItems,
  hasNextPage,
  fetchNextPage,
}: ContentCategoryListProps) {
  switch (category) {
    case 'all':
      return (
        <div className='flex flex-col gap-20'>
          <div className='flex flex-col gap-20'>
            <span className='text-body-01 text-neutral-900'>Q&A</span>
            <ul className='flex flex-col gap-16'>
              {faqItems.map((faqItem, index) => (
                <FaqItem key={index} faqItem={faqItem} />
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-20'>
            <span className='text-body-01 text-neutral-900'>주차별 정보</span>
            <ul className='flex flex-col gap-16'>
              {weekInfoItems.map((weekInfoItem, index) => (
                <>{/* 주차별 정보 UI 컴포넌트 */}</>
              ))}
            </ul>
          </div>
        </div>
      );
    case 'faq':
      return (
        <VirtualList
          data={faqItems}
          onEndReached={() => hasNextPage && fetchNextPage()}
          renderItem={(index, item) => (
            <div className='mb-16'>
              <FaqItem key={index} faqItem={item} />
            </div>
          )}
        />
      );
    case 'info':
      return (
        <ul className='flex flex-col gap-16'>
          {/* 주차별 정보 UI 컴포넌트 */}
        </ul>
      );
    default:
      return null;
  }
}
