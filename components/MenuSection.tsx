import MenuItem from './MenuItem';

interface MenuItemData {
  id: string;
  name_en: string;
  name_fr: string;
  description_en: string;
  description_fr: string;
  price: number;
  image: string;
}

interface MenuSectionProps {
  id: string;
  name: string;
  items: MenuItemData[];
  locale: string;
}

export default function MenuSection({ id, name, items, locale }: MenuSectionProps) {
  return (
    <section id={id} className="scroll-mt-24" aria-label={name}>
      <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a20] mb-6 pb-3 border-b-2 border-[#f3a42a]">
        {name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            name={locale === 'fr' ? item.name_fr : item.name_en}
            description={locale === 'fr' ? item.description_fr : item.description_en}
            price={item.price}
            image={item.image}
            imageAlt={locale === 'fr' ? item.name_fr : item.name_en}
          />
        ))}
      </div>
    </section>
  );
}
