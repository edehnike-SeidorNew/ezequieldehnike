import { NotFoundView } from "@/components/NotFoundView";
import { getContent } from "@/resources/i18n";

export default async function NotFound() {
  const { t } = await getContent();
  return <NotFoundView title={t.notFoundTitle} text={t.notFoundText} />;
}
