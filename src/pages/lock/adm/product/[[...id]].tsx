import { PageLocked, Input, InputSelect } from 'components';
import { capitalize, FormSubmit, getShadeColor, useForm, validation, useState, onMount, onUnmount } from '_lib/global';
import { Button, Link, myStyles, View } from '_lib/web';
import { FaPlusSquare } from 'react-icons/fa';
import { theme } from '_app';
import { Stack, VStack } from '@chakra-ui/react';
import { lookTag } from 'data';
import { ProvidersManager } from 'context';
import { OnEndHandle } from 'types';
import { useToast, useRouter } from 'hooks';
import { APIClient } from 'services';

type ProductFormData = {
  name: string;
  description: string;
  type: string;
  price: number;
  stock: string;
}

const schema = validation.createForm(is => ({
  name: is.string().required("Name is required").min(3, 'Minimum of 3 characters'),
  description: is.string().required("Description is required").min(3, 'Minimum of 3 characters'),
  type: is.string().required("Tag is required"),
  price: is.number().required("Price is required"),
  stock: is.number().required("Stock is required"),
}));

const page = 'product';

export default function ProductAdd() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const { AppStatus } = ProvidersManager.useAppStatus();
  const { Products } = ProvidersManager.useProducts();
  const { errorToast, standartErrorMessage } = useToast();
  const router = useRouter();

  const { register, errors, onSubmit, isFieldDisable, cleanFormValues, setValue } = useForm<ProductFormData>({ schema, onDisableFields: isLoading === true });

  const { id } = router.query as any

  const productId = !id ? '' : id[0] as string;
  const isEdit = productId?.length > 1;

  const handleSaveProduct: FormSubmit<ProductFormData> = async (values) => {
    setIsLoading(true);
    AppStatus.set('loading');

    const data = {
      ...values,
      banner: 'look2.jpg',
      product: 'look'
    }

    const onEnd = ({ err, status = 'none' }: OnEndHandle) => {
      AppStatus.set(status);
      setIsLoading(false);
      if (err) errorToast(err);
    }

    if (isEdit) {
      await APIClient.Admin.Products.update({ id: productId, ...data })
      .then(async ({ data }) => {
        if (data.error) onEnd({ err: data.error });

        if (data.message) {
          await getProduct(productId, false);
          onEnd({ status: 'done' });
        }
      })
      .catch(() => {
        onEnd({ err: standartErrorMessage })
      })
    } else {
      await APIClient.Admin.Products.create(data)
      .then(({ data }) => {
        if (data.error) onEnd({ err: data.error });

        if (data.message) {
          onEnd({ status: 'done' });
          cleanFormValues();
        }
      })
      .catch(() => {
        onEnd({ err: standartErrorMessage })
      })
    }
  }

  const getProduct = async (id: string, _l: boolean = true) => {
    setIsLoadingProduct(_l);

    await APIClient.Admin.Products.getById(id)
      .then(({ data }) => {
        if (data.error) errorToast(data.error);

        if (data.message) {
          const p = data.product.data;

          setValue('name', p?.name);
          setValue('description', p?.description);
          setValue('price', Number(p?.price));
          setValue('stock', p?.stock);
          setValue('type', p?.type);
        }
      })
      .catch(() => {
        errorToast();
      });

    setIsLoadingProduct(false);
  }

  onMount(() => {
    if (isEdit) {
      getProduct(productId);
    }
  });

  onUnmount(() => {
    Products.refetch();
  })

  return (
    <PageLocked styles={MyStyles} title={page} isLoading={isLoadingProduct}>
      <View style='img'>
        <FaPlusSquare size={22} color={theme.colors.primary} />
      </View>
      <Stack className='details' as='form' onSubmit={onSubmit(handleSaveProduct)}>
        <VStack w='100%' spacing='5'>
          <Input
            is="name"
            label='Name'
            placeholder="product name"
            isDisabled={isFieldDisable}
            error={errors.name}
            {...register('name')}
          />
          <Input
            is="description"
            label='Description'
            placeholder="short product description"
            isDisabled={isFieldDisable}
            error={errors.description}
            {...register('description')}
          />
          <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
            <InputSelect
              is="type"
              label='Product Tag'
              placeholder="Select tag of product"
              options={lookTag}
              isDisabled={isFieldDisable}
              error={errors.type}
              {...register('type')}
            />
            <Input
              is="price"
              label='Price'
              placeholder="Price"
              type='number'
              isDisabled={isFieldDisable}
              error={errors.price}
              {...register('price')}
            />
          </Stack>
          <Input
            is="stock"
            label='Quantity in stock'
            placeholder="please enter exactly the available quantity of this product"
            type='number'
            isDisabled={isFieldDisable}
            error={errors.stock}
            {...register('stock')}
          />
        </VStack>
        <Stack mt='6' direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
          <Button type='submit' text={capitalize('save')} onPress={() => null} />
          <Link text={capitalize('cancel')} style='button-cancel' href='/lock/adm/dashboard' />
        </Stack>
      </Stack>
    </PageLocked>
  );
}

const MyStyles = myStyles.mutate.createPage((theme) => ([
  theme.myStyles.create(page, [
    theme.w.size(100, '%'),
    theme.h.min(100, 'vh'),
    theme.row.centerBetween,
    theme.padding.horizontal.size(3),
    theme.padding.top.size(7),
    theme.padding.bottom.size(3),
    theme.elements.spacing.size(1),

    theme.responsiveness.platforms({}, { comommStyle: [theme.column.startCenter], incluide: ['m', 't'] })
  ], [
    theme.myStyles.childClass('img', [
      theme.w.size(30, '%'),
      theme.h.min(20),
      theme.h.fill(),
      theme.centerColumn,
      theme.presets.bgColor(getShadeColor(theme.colors.input.placeholder, 80)),
      theme.border.rounded.size(0.3),
      theme.effect.hover.inOwn([theme.effect.filter.glow(0.95)], 0.2),

      theme.responsiveness.platforms({}, { comommStyle: [theme.w.fill()], incluide: ['m', 't'] })
    ]),
    theme.myStyles.childClass('details', [
      theme.w.size(70, '%'),
      theme.h.fill(),
      theme.column.startStart,
      theme.elements.spacing.size(1.2),

      theme.responsiveness.platforms({}, { comommStyle: [theme.w.fill()], incluide: ['m', 't'] }),

      theme.myStyles.tag(['button', 'a'], [
        theme.w.size(50, '%'),
        theme.padding.full.size(0.5),
        theme.bg.primary,
        theme.font.apply('md', 0.9, theme.font.typography.text, theme.colors.background),
        theme.border.rounded.size(0.3),
        theme.effect.hover.inOwn([theme.effect.filter.glow(0.85)], 0.2),

        theme.myStyles.inOwnHasClass('button-cancel', [
          theme.bg.input.placeholder,
          theme.textColor.black,
          theme.centerRow,
        ]),
      ])
    ]),
  ])
]), 'div', true);
